import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
     <>
     <h2>Discover Your New Home</h2>
      <br />
      <br />
      <div className='aptList' >
      <Col sm="6" >
       {apartments.map((apartment, index) => {
         return(
           <div className="cardList" key={index}>
           <Card  body key={apartment.id}>
              <CardTitle >
           <p> {apartment.street}</p>
           </CardTitle>
           <NavLink to={`apartmentshow/${apartment.id}`}>
           <Button>
              More Info
            </Button>
          </NavLink>
           </Card>
           </div>
         )
        }
      )
     }
         </Col>
         </div>
            
     </>
    )
  }
}
