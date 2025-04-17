import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import searchlogo from '../../assets/searchlogo.png';
import bellicon from '../../assets/bellicon.png';
import profileicon from '../../assets/profileicon.jpg';
import dropdown from '../../assets/dropdown.png';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={searchlogo} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bellicon} alt="Notifications" className='icons' />

        <div
          className="navbar-profile"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img src={profileicon} alt="Profile" className='profile' />
          <img src={dropdown} alt="Dropdown arrow" />
        </div>

        {showDropdown && (
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
