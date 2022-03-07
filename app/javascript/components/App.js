import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import mockData from './mockData'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        apartments: mockData
      }
  }

    createApartment = (apartment) => {
      console.log("here",apartment);
    }

    updateApartment = (apt, id) => {
      console.log("update", apt);
      console.log("updateID", id);
    }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
       <Router>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />
          <Route  path="/apartmentshow/:id" render={(props) =>{
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment} />
          }} />
         


          <Route  path="/apartmentnew" 
            render={ (props) => <ApartmentNew createApartment={this.createApartment} />} 
            />

          <Route  path="/apartmentedit/:id" 
            render={(props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apt => apt.id === +id)
              return <ApartmentEdit updateApartment={this.updateApartment} apartment={apartment} />
          }}
            />


         <Route path="/about" component={About} /> 
        </Switch>
      </Router>
      </>
    )
  }
}

export default App