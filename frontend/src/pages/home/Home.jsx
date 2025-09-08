import React from 'react';
import "./Home.css"
import Navbar from '../../component/Navbar/Navbar';
import bg from "../../assets/bg0.gif"
import { catagory } from '../../Catagory';

const Home = () => {
  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="catagory-section">
      {
        catagory.slice(0,5).map((item)=>(
            <div className="catagory-card">
                <img src={item.image} alt="" />
                <span>{item.name}</span>
            </div>
        ))
      }
      </div>
    </div>
  );
}

export default Home;
