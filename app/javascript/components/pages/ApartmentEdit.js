import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class ApartmentEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            newApartment: {
              street: this.props.apartment.street,
              city: this.props.apartment.city,
              state: this.props.apartment.state,
              manager: this.props.apartment.manager,
              email: this.props.apartment.email,
              price: this.props.apartment.price,
              bedrooms: this.props.apartment.bedrooms,
              bathrooms: this.props.apartment.bathrooms,
              pets: this.props.apartment.pets,
              pictures: this.props.apartment.pictures        
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
    return (
     <>
          <Form className='form'>
          <FormGroup className='form-group'>
            <Label className='form-label' for="street">
              Street Address
            </Label>
            <Input
            className='input'
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
            className='input'
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
            className='input'
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
            className='input'
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
            className='input'
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
            className='input'
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
            className='input'
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
            className='input'
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
            className='input'
              name="pets"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.pets}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pictures">
             Picture URL
            </Label>
            <Input
            className='input'
              name="pictures"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.pictures}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            >
            Edit Property
          </Button>
        </Form>
        {this.state.submitted && <Redirect to={`/protectedshow/${this.props.apartment.id}`} />}
     </>
    )
  }
}
