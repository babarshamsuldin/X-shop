import React from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { AddItem } from '../../redux/cartSlice'


const Product = ({name, image, price, id}) => {
  let dispatch = useDispatch()
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className='price'>RS : {price}</span>
        <span>{id}</span>
        <button onClick={()=>{
          dispatch(AddItem({name:name, image:image, price:price, id:id}))
          alert("Product Added Successfully..")
        }}>Add +</button>
      </div>
    </div>
  )
}

export default Product
