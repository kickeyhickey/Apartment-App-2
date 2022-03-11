import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button, CardImg } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      submitted: false
    }
  }

  handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this property profile?"
      ) === true
    ) {
      this.props.deleteApartment(this.props.apartment.id)
      this.setState({ submitted: true });
    }
  };

  render() {
    const { apartment } = this.props
    return (
      <>
      <Col sm="6" className="cardList">
        <Card body>
        <CardImg top width="100%" src={apartment.pictures} className='cardImage'></CardImg>
          <CardTitle className='cardTitle'>Street: {apartment.street}</CardTitle>
          <CardText>
          City: {apartment.city}
           <br />
           State: {apartment.state}
           <br />
           Manager: {apartment.manager}
           <br />
           Email: {apartment.email}
           <br />
           Price: {apartment.price}
           <br />
           bedrooms: {apartment.bedrooms}
           <br />
           Bathrooms: {apartment.bathrooms}
           <br />
           Pets: {apartment.pets}
          </CardText>
          <NavLink to={'/apartmentindex'}>
           <Button>
              Back
            </Button>
          </NavLink>
        </Card>
     </Col>
     <NavLink to={`/apartmentedit/${this.props.apartment.id}`}>
        <Button>Edit Property</Button>
    </NavLink>
    <NavLink to="/apartmentindex">
      <Button onClick={this.handleDelete}>
        Delete Property
      </Button>
    </NavLink>
     </>
    )
  }
}