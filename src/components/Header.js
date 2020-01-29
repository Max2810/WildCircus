import React from 'react'


function Header() {
  return (
    <div className="Header">
      <header class="Haut">
        <h1>Wild Circus</h1>
        <nav class="menu">
          <ul>
            <li> | <a href="#Performances">Performances</a> | </li>
            <li><a href="#About_Us">About Us</a> |</li>
            <li><a href="#Prices">Prices</a> |</li>
            <li><a href="#Contact_Us">Contact</a> |</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;