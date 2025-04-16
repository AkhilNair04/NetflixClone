import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchlogo from '../../assets/searchlogo.png'
import bellicon from '../../assets/bellicon.png'
import profileicon from '../../assets/profileicon.jpg'
import dropdown from '../../assets/dropdown.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>New and Popular</li>
          <li>My list</li>
          <li>Browse</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchlogo} alt="" srcset="" className='icons' />
        <p>Children</p>
        <img src={bellicon} alt="" srcset="" className='icons' />
        <div className="navbar-profile">
          <img src={profileicon} alt="" srcset="" className='profile' />
          <img src={dropdown} alt="" srcset="" />
        </div>
        <div className="dropdown">
          <p>Sign Out of Netflix</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
