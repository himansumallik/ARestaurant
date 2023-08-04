import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import './Navbar.css'



const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <div id='navbar'>
      <div><h3>Logo</h3></div>
      <div>
        <nav ref={navRef}>
            <a href="/#"> Home </a>
            <a href="/#"> Services </a>
            <a href="/#"> Blog </a>
            <a href="/#"> About Us </a>
        </nav>
      </div>
      <div>
        <button className='nav-btn nav-close-btn' onClick={showNavbar} >
            <FaBars />
        </button>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Navbar
