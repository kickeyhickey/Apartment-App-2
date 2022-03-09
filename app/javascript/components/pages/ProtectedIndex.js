import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    console.log("protected",this.props.apartments);
    const { myApartments } = this.props
    return (
     <>
     <h2>All Available Properties</h2>

      <br />

      <br />
      <Col sm="6">
       {myApartments.map(apartment => {
         return(
           <Card body key={apartment.id}>
              <CardTitle>
           <p>{apartment.street}</p>
           </CardTitle>
           <NavLink to={`protectedshow/${apartment.id}`}>
           <Button>
              More Info
            </Button>
          </NavLink>
           </Card>
         )
        })}
         </Col>
         <NavLink to={`apartmentnew`}>
           <Button>
              Add A Property
            </Button>
          </NavLink>
            
     </>
    )
  }
}
