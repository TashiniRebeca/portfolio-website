/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/App.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img id='logo' src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Interests</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Connect with me
      </div>
    </div>
  )
}

export default Navbar