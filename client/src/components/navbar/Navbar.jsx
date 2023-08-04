import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import '/home/himansu/Desktop/projects/ARestaurant/client/src/styles/main.css'



const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
       <h2> Restaurant Logo</h2>
       <nav ref={navRef}>
            <a href="/#"> Home </a>
            <a href="/Services"> Services </a>
            <a href="/Blog"> Blog </a>
            <a href="/About"> About Us </a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar} >
                <FaBars />
            </button>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
        </button>
    </header>
  )
}

export default Navbar
