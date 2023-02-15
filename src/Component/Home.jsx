import React from "react";
//import p1 from  './images/bg8.png';
import Product from "./Product";
import Slider from './Slider';




function Home() {
  return (
    <div className="">
      <div className="card text-bg-dark text-white border-0">
        <Slider/>
      </div>
      <Product/>
      
    </div>
  );
}

export default Home;
