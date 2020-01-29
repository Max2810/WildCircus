import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="Header">
        <h1>Wild Circus</h1>
        <nav className="menu">
          <ul className="liste-menu">
            <li><a href="#Performances">Performances</a></li>
            <li><a href="#About_Us">About Us</a></li>
            <li><a href="#Prices">Prices</a></li>
            <li><a href="#Contact_Us">Contact</a></li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;