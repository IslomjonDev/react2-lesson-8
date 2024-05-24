import React from 'react'
import './Navbar.css'
import { IoIosBook } from "react-icons/io";
import {  FaRegSmile , FaHeart } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <header>
        <div className="container">
         <div className="navbar">
            <div className="nav__logo">
              <NavLink to={'/'}>
               <h2>AliExpress</h2>
              </NavLink>
            </div>
            <div className="nav__list">
              <button><IoIosBook /></button>
              <div className="inp-btn">
                  <input type="text" name="" id="" placeholder='Search ...' />
                  <button>FIND</button>
              </div>
              <NavLink to={'/wishlist'}>
                <button><FaHeart /></button>
              </NavLink>
              <NavLink to={'/cart'}>
              <button><HiMiniShoppingCart /></button>
              </NavLink>
              <button><FaRegSmile /></button>
            </div>
         </div>
        </div>
      </header>
    </>
  )
}

export default Navbar