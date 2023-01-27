import { useState } from "react";
import SideNav from "../Dashboard/Dashboard";
import "./header.css"

const Header = () => {
    
    
    return  <header className="header">
<div className="title">
    <h3>HRMS</h3>
  
    </div>
<div className="well">
    <h4> WelCome Admin</h4>
</div>
    <div className="btn">
<button id="btn"> Sign Out</button>
</div>
   
   </header>
}
export default Header;