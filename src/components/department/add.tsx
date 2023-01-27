import React from "react";
import './add.css';


const AddDepartment=()=>{
    return<div className=" form-container2">
            <form>
            <h2>Add Department</h2>
            <div className="input-container-two">
        <label htmlFor="" className="label1">Department ID</label>
        <input type="text" className="field" placeholder="Enter ID" /><br/>
        <label htmlFor="" className="label2">Department Name</label>
        <input type="text" className="field" placeholder="Enter department name" /><br/>
        <label htmlFor="" className="label3">Designation</label>
        <input type="text" className="field" placeholder="Enter  Designation" /><br/>
        <button className="department-button">Submit</button>
        </div>
        </form>
        </div>
    
}
export default AddDepartment;