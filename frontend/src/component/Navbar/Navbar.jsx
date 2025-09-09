import React from 'react';
import "./Navbar.css"
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux"


const Navbar = () => {
  let item = useSelector(state=>state)
  console.log(item)
  return (
    <div className='nav'>
      <div className="top-nav">
        <Link to={"/"}><div className="logo">
            <span>V-Shop</span>
            <FaShopify />
        </div></Link>
        <form className='search-box'>
            <input type="text" placeholder='Search items...' />
            <button><FaSearch /></button>
        </form>
        <Link to={"/cart"}><div className="cart-box">
        <IoCartOutline />
        <span>{item.cart.lenght}</span>
        </div>
        </Link>
      </div>
      <div className="bottom-nav">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/shop"}><li>Shop</li></Link>
            <Link to={"/cart"}><li>Cart</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
      </div>
    </div>
  );
}

export default Navbar;
