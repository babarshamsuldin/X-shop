import React, { useState } from 'react';
import "./Home.css"
import bg from "../../assets/bg0.gif"
import { catagory } from '../../Catagory';
import {dummydata} from "../../dummydata.js"
import Product from '../../component/product/Product.jsx';

const Home = () => {
    const [cate, setcate] = useState(dummydata)
    function filterProduct(catagory){
        const updatData = dummydata.filter((item)=>(item.category === catagory))
        setcate(updatData)
    }

  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="catagory-section">
      {
        catagory.slice(0,5).map((item)=>(
            <div className="catagory-card" onClick={()=>{
                filterProduct(item.name)
            }}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
            </div>
        ))
      }
      </div>
      <h1>Trending Product</h1>
      <div className="product-section">
        {
          cate.slice(0, 7).map((item)=>(
                <Product name={item.name} image={item.image} price={item.price} id={item.id}/>
            ))
        }
      </div>
    </div>
  );
}

export default Home;
