import { useState } from "react";
import SideNav from "../Dashboard/Dashboard";
import "./header.css"

const Header = () => {
    
    
    return  <header className="Dash-header">
<div className="title">
    <h3 className="HRMS-h3">HRMS</h3>
  
    </div>
<div className="well">
    <h4 className="Admin-h4" > WelCome Admin</h4>
</div>
    <div className="btn">
<button id="btn-header"> Sign Out</button>
</div>
   
   </header>
}
export default Header;