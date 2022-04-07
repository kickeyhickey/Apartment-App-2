import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
     
     <div className="site-body">
     <div className="home-top">
     <h2>All Available Properties</h2>
      <br />
      <br />
      <div className="flex">
       {apartments.map((apartment, index) => {
         return(
           <div className="apt-card" key={index}>
           <NavLink to={`apartmentshow/${apartment.id}`}>
             <div className='cardImage'>
             <img src={apartment.pictures}></img>
             </div>
              <CardTitle className='cardTitle'>
             <h3>{apartment.street}</h3>
              </CardTitle>
                <CardText>
                  <ul>
                 <li>City: {apartment.city}</li> 
                    <br />
                    <li> State: {apartment.state}</li> 
                  <br />
                  <li> Price: {apartment.price}</li> 
                  </ul>
                </CardText>
          </NavLink>
         </div>
        )
      }
     )
  }
  </div>
         </div>
         </div>
     
    )
  }
}
