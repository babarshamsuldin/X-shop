import React from 'react'
import "./CartCard.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';


const CartCard = ({name, image, price, id}) => {
    let dispatch = useDispatch()
  return (
    <div className='cartCard'>
      <div className="leftcard">
        <img src={image} alt="" />
        <div className="name-price">
            <span>{name}</span>
            <span>Rs : {price}</span>
        </div>
      </div>
      <div className="rightcard">
        <button onClick={()=>{
            dispatch(RemoveItem(id))
            alert("Product Removed Successfully..")
        }}>Remove <RiDeleteBin6Line/></button>
      </div>
    </div>
  )
}

export default CartCard
