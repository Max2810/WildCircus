import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <h1>Wild Circus</h1>
      <nav className="menu">
        <ul className="liste-menu">
          <li><NavLink activeClassName="active" to="/performances">Performances</NavLink></li>
          <li><NavLink activeClassName="active" to="/aboutUs">About Us</NavLink></li>
          <li><NavLink activeClassName="active" to="/prices">Prices</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;