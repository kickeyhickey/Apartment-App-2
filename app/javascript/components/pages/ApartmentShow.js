import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
     <>
      <section className="apt-info site-body">
        <div>
          <Link to="/">
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
            {apartment.manager && <li>{apartment.email}</li>}
          <li> Price: {apartment.price}</li>
            <li>bathrooms: {apartment.bathrooms}</li>
            <li>bedrooms: {apartment.bedrooms}</li>
            <li>Pets: {apartment.pets}</li>
          </ul>
        </div>
       </section>
        </>
        )
     }
   }