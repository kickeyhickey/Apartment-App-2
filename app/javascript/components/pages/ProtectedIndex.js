import React, { Component } from 'react'
import { Card, CardTitle, Col, Button, CardImg, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    const { myApartments } = this.props
    return (
      <>
        <div className="home-top">
          <h2>All Available Properties</h2>
          <br />
          <br />
          <div className='aptList' >
            <Col sm="6" className='flex'>
              {myApartments.map((apartment, index) => {
                return (
                  <div className="cardList" key={index}>
                    <NavLink to={`protectedshow/${apartment.id}`}>
                      <Card body key={apartment.id}>
                        <CardImg
                          className='cardImage'
                          src={apartment.pictures}>
                        </CardImg>
                        <CardTitle className='cardTitle'>
                          <p>{apartment.street}</p>
                        </CardTitle>
                        <CardText>
                          City: {apartment.city}
                          <br />
                          State: {apartment.state}
                          <br />
                          Price: {apartment.price}
                        </CardText>
                      </Card>
                    </NavLink>
                  </div>
                )
              })}
            </Col>
          </div>
          <NavLink to={`apartmentnew`}>
            <Button
              color='primary'
            >
              Add A Property
            </Button>
          </NavLink>
        </div>
      </>
    )
  }
}
