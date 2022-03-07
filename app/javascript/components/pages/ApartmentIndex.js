import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    const { apartments } = this.props
    return (
     <>
     <h2>All Available Properties</h2>

      <br />

      <h3>Meet the Cats!</h3>

      <br />
      <Col sm="6">
       {apartments.map(apartment => {
         return(
           <Card body key={apartment.id}>
              <CardTitle>
           <p>{apartment.street}</p>
           </CardTitle>
           <NavLink to={`apartmentshow/${apartment.id}`}>
           <Button>
              More Info
            </Button>
          </NavLink>
           </Card>
         )
        })}
         </Col>
            
     </>
    )
  }
}
