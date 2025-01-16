import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import logo from '/img/logo.png'
function Navbar() {

    const [menuIcon, setMenuIcon] = useState();

  return (
   <>
   <div className='mainHeader'>

   <NavLink to="/">
        <img src={logo} alt="my logo img" />
      </NavLink>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/porfile" className="navbar-link cart-trolley--link">
              <CgProfile  className="cart-trolley" />
            
            </NavLink>
          </li>
        </ul>

    
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>

   </div>
   
   </>
  )
}

export default Navbar