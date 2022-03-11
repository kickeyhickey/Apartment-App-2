import React, { Component } from 'react'
import { Card, CardTitle, Col, Button, CardImg } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    const { myApartments } = this.props
    return (
     <>
     <h2>All Available Properties</h2>
      <br />
      <br />
      <div className='aptList' >
      <Col sm="6">
       {myApartments.map((apartment, index) => {
         return(
          <div className="cardList" key={index}>
           <Card body key={apartment.id}>
             <CardImg
               className='cardImage'
               src={apartment.pictures}>
             </CardImg>
              <CardTitle
                className='cardTitle'>
           <p>{apartment.street}</p>
           </CardTitle>
           <NavLink to={`protectedshow/${apartment.id}`}>
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
         <NavLink to={`apartmentnew`}>
           <Button>
              Add A Property
            </Button>
          </NavLink>
            
     </>
    )
  }
}
