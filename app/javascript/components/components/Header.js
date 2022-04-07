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
          <NavLink to="/" className="nav-link">
            <p>See All the Apartments</p>
          </NavLink>
          {logged_in &&
            <NavLink to="/protectedindex" className="nav-link">
             <p> My Apartments </p>
            </NavLink>
          }
          {logged_in &&
            <NavLink to="/apartmentnew" className="nav-link">
            <p>  Add an Apartment </p>
            </NavLink>
          }
        </div>
        <div className="nav-bar">
          <NavLink to="/" className="logo">
            <h2>Hickey Apartments</h2>
          </NavLink>
        </div>
        <div className="nav-bar">
          {logged_in &&
            <a href={sign_out_route} className="nav-link-log">Sign Out</a>
          }
          {!logged_in &&
            <a href={sign_in_route} className="nav-link-log">Sign In</a>
          }
          {!logged_in &&
            <a href={new_user_route} className="nav-link-log">Sign Up</a>
          }
        </div>
      </header>
    )
  }
}
export default Header
