import React, { useState } from 'react'
import "./Shop.css"
import { catagory } from '../../Catagory'
import { dummydata } from '../../dummydata'
import Product from '../../component/product/Product'
import { FaShopify } from "react-icons/fa";


const Shop = () => {
    const [cate, setcate] = useState(dummydata)
    
    function filterProduct(catagory){
        if(catagory === "All"){
            setcate(dummydata)
        }else{
            const updatData = dummydata.filter((item)=>(item.category === catagory))
            setcate(updatData)
        }
    }
  return (
    <div className='shop'>
        <div className="shop-logo">
        <span>Shop</span>
        <FaShopify />
        </div>
      <div className="catagory-section">
      {
        catagory.map((item)=>(
            <div className="catagory-card" onClick={()=>{
                filterProduct(item.name)
            }}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
            </div>
        ))
      }
      </div>
      <div className="product-section">
        {
          cate.map((item)=>(
                <Product name={item.name} image={item.image} price={item.price} id={item.id}/>
            ))
        }
      </div>
      
    </div>
  )
}

export default Shop
