import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <div className="nav-bar">
          <NavLink to="/apartmentindex" className="nav-link">
            See All the Apartments
          </NavLink>
          {logged_in &&
            <NavLink to="/protectedindex" className="nav-link">
              My Apartments
            </NavLink>
          }
          {logged_in &&
            <NavLink to="/apartmentnew" className="nav-link">
              Add an Apartment
            </NavLink>
          }
        </div>
        <div className="nav-bar">
          <NavLink to="/">
            <h2>Hickey Apartments</h2>
          </NavLink>
        </div>
        <div className="nav-bar">
          {logged_in &&
            <a href={sign_out_route} className="nav-link">Sign Out</a>
          }
          {!logged_in &&
            <a href={sign_in_route} className="nav-link">Sign In</a>
          }
          {!logged_in &&
            <a href={new_user_route} className="nav-link">Sign Up</a>
          }
        </div>
      </header>
    )
  }
}
export default Header
