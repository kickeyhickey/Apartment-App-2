import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'


export default class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    return (
     <>
     <h2>All Available Properties</h2>

      <br />

      <h3>Meet the Cats!</h3>

      <br />
      <Col sm="6">
       {this.props.apartments.map(apartment => {
         return(
           <Card body key={apartment.id}>
              <CardTitle>
           <p>{apartment.street}</p>
           </CardTitle>
           </Card>
         )
       })}
         </Col>
        
     </>
    )
  }
}
