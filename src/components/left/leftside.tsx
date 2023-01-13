import React from "react";
import './left.css';
import img1 from '../../assets/Ellipse 1.png'
import img2 from '../../assets/Ellipse 2.png'


const LeftSide= ()=>{
  return(
    <div className="container__col-1">
        <img src={img1} alt="" className="image1"/>
        <img src={img2} alt="" className="image2"/>
    </div>
    
  )
}
export default LeftSide;