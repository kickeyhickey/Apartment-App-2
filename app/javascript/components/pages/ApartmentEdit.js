import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class ApartmentEdit extends Component {
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
        this.props.updateApartment(this.state.newApartment, this.props.apartment.id)
        this.setState({ submitted: true })
    }

  render() {
      console.log(this.props.apartment);
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
              value={this.props.apartment.street}
              
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
              value={this.props.apartment.city}
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
              value={this.props.apartment.state}
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
              value={this.props.apartment.manager}
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
              value={this.props.apartment.email}
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
              value={this.props.apartment.price}
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
              value={this.props.apartment.bedrooms}
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
              value={this.props.apartment.bathrooms}
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
              value={this.props.apartment.pets}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            >
            Edit Cat Profile
          </Button>
        </Form>
        {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />}
     </>
    )
  }
}
