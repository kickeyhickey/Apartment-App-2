import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class ApartmentNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newApartment: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: ""        
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { newApartment } = this.state
    newApartment[e.target.name] = e.target.value
    this.setState({ newApartment: newApartment })
  }

  handleSubmit = () => {
    this.props.createApartment(this.state.newApartment)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
      <Form>
          <FormGroup>
            <Label for="street">
              Street Address
            </Label>
            <Input
              name="street"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.street}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">
              City
            </Label>
            <Input
              name="city"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">
              State
            </Label>
            <Input
              name="state"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">
              Manager's Name
            </Label>
            <Input
              name="manager"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              Manager's Email
            </Label>
            <Input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">
              Rental Price
            </Label>
            <Input
              name="price"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">
              Bedrooms
            </Label>
            <Input
              name="bedrooms"
              type="number"
              onChange={this.handleChange}
              value={this.state.newApartment.bedrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">
              Bathrooms
            </Label>
            <Input
              name="bathrooms"
              type="number"
              onChange={this.handleChange}
              value={this.state.newApartment.bathrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">
              Are Pets Allowed?
            </Label>
            <Input
              name="pets"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.pets}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}
             >
            Create a New Property
          </Button>
        </Form>
        
        {this.state.submitted && <Redirect to="/apartmentindex" />}
        </>
    )
  }
}
