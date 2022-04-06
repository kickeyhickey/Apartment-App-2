import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'

export default class ApartmentShow extends Component {
  constructor(props) {
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
        <section className="apt-info site-body">
          <div>
            <Link to="/protectedindex">
              <Button color="secondary">Back</Button>
            </Link>
            <br />
            <br />
            <img
              src={apartment.pictures}
              width="1200px"
              className="apartment-info-image"
            />
            <h2>
              <strong>
                {apartment.street}, {apartment.state}
              </strong>
            </h2>
            <ul>
              {apartment.manager && <li>Contact: {apartment.email}</li>}
              <li> Price: {apartment.price}</li>
              <li>bathrooms: {apartment.bathrooms}</li>
              <li>bedrooms: {apartment.bedrooms}</li>
              <li>Pets: {apartment.pets}</li>
            </ul>
          </div>
          <NavLink to={`/apartmentedit/${this.props.apartment.id}`}>
            <Button>Edit Property</Button>
          </NavLink>
          <NavLink to="/protectedindex">
            <Button
              color='danger'
              onClick={this.handleDelete}>
              Delete Property
            </Button>
          </NavLink>
        </section>
      </>
    )
  }
}
