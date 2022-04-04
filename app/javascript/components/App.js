import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import Header from './components/Header'
import ProtectedIndex from './pages/ProtectedIndex'
import ProtectedShow from './pages/ProtectedShow'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'


 
class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        apartments: []
      }
  }

    componentDidMount(){
      this.readApartment()
    }

    readApartment = () => {
      fetch("/apartments")
      .then(response => {
        return response.json()
      })
      .then(payload => {
        this.setState({ apartments: payload })
      })
      .catch(errors => {
        console.log("readApartment errors:", errors);
      })
    }

    createApartment = (newApartment) => {
      fetch("/apartments", {
        // converting an object to a string
        body: JSON.stringify(newApartment),
        // specify the info being sent in JSON and the info returning should be JSON
        headers: {
          "Content-Type": "application/json"
        },
        // HTTP verb so the correct endpoint is invoked on the server
        method: "POST"
      })
      .then(response => response.json())
      .then(() => this.readApartment())
      .catch(errors => console.log("Cat create errors:", errors))
    }

    updateApartment = (apartment, id) => {
      fetch(`/apartments/${id}`, {
        body: JSON.stringify(apartment),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => {
        console.log(response)
        if(response.status === 422){
          alert("There is something wrong with your submission.")
        }
        return response.json()
      })
      .then(() => {
        this.readApartment()
      })
      .catch(errors => {
        console.log("edit errors:", errors)
      })
    }

    deleteApartment = (id) => {
      fetch(`/apartments/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => {
        if(response.status === 422){
          alert("There is something wrong with your submission.")
        }
        return response.json()
      })
      .then(() => {
        this.readApartment()
      })
      .catch(errors => {
        console.log("delete errors:", errors)
      })
    }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { apartments } = this.state
    return(
      <>
       <Router>
         <Header {...this.props} />
        <Switch>
          <Route exact path="/" render={(props) => <Home apartments={this.state.apartments} />} />
          <Route  path="/apartmentshow/:id" render={(props) =>{
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment} deleteApartment={this.deleteApartment} 
            />
          }}
         />
         
          ( logged_in &&
            <Route  path="/protectedshow/:id" render={(props) =>{
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.user_id === +current_user.id)
            return <ProtectedShow apartment={apartment} deleteApartment={this.deleteApartment} 
            />
          }}
         />
          )

         {logged_in &&
            <Route
              path="/protectedindex"
              render={(props) => {
                let myApartments = apartments.filter(apt => apt.user_id === current_user.id)
                return <ProtectedIndex myApartments={myApartments} />
              }}
            />
          }
         
        { logged_in &&
          <Route  path="/apartmentnew" 
            render={(props) => <ApartmentNew createApartment={this.createApartment} current_user={current_user} />} 
            />
        }



          { logged_in &&
          <Route 
             path="/apartmentedit/:id" 
             render={(props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apt => apt.id === +id)
              return (
               <ApartmentEdit
                updateApartment={this.updateApartment}
                 apartment={apartment} 
                 current_user={current_user} 
               />
             )
          }}
         />
       }

         <Route path="/about" component={About} /> 
        </Switch>
      </Router>
      </>
    )
  }
}

export default App