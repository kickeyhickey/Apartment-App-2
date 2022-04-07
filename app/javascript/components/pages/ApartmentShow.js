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
          <div className="show-div">
          <img
            src={apartment.pictures}
            width="1000px"
            className="apartment-info-image"
          />
          <div className="show-info">
          <h2>
            <strong>
              {apartment.street}, {apartment.city}, {apartment.state}
            </strong>
          </h2>
          <ul>
            <li> Manager: {apartment.manager}</li>
            <li> Email: {apartment.email}</li>
            <li> Price: {apartment.price}</li>
            <li>bathrooms: {apartment.bathrooms}</li>
            <li>bedrooms: {apartment.bedrooms}</li>
            <li>Pets: {apartment.pets}</li>
          </ul>
          </div>
        </div>
        </div>
       </section>
        </>
        )
     }
   }