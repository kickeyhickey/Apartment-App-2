import React, { Component } from 'react'
import { Card, CardTitle, Col, Button, CardImg, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    const { apartments } = this.props
    return (
     <>
     <h2>All Available Properties</h2>
      <br />
      <br />
      <div className='aptList' >
      <Col sm="6" >
       {apartments.map((apartment, index) => {
         return(
           <div className="cardList" key={index}>
           <Card  body key={apartment.id}>
             <CardImg className='cardImage' src={apartment.pictures}></CardImg>
              <CardTitle className='cardTitle'>
              {apartment.street}
              </CardTitle>
           <CardText>
             City: {apartment.city}
              <br />
             State: {apartment.state}
             <br />
             Price: {apartment.price}
             </CardText>
           <NavLink to={`apartmentshow/${apartment.id}`}>
           <Button>
              More Info
            </Button>
          </NavLink>
           </Card>
           </div>
         )
        })}
         </Col>
         </div>
            
     </>
    )
  }
}
