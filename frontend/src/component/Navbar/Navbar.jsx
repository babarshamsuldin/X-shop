import React from 'react';
import "./Navbar.css"
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className='nav'>
      <div className="top-nav">
        <div className="logo">
            <span>V-Shop</span>
            <FaShopify />
        </div>
        <form className='search-box'>
            <input type="text" placeholder='Search items...' />
            <button><FaSearch /></button>
        </form>
        <div className="cart-box">
        <IoCartOutline />
        <span>0</span>
        </div>
      </div>
      <div className="bottom-nav">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
      </div>
    </div>
  );
}

export default Navbar;
