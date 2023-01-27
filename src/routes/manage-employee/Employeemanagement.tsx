import React from 'react';
import './employeemanagement.css';

const EmployeeDepartment = () => {
    return ( 
    <div className='employeeContainer'>
        <div className='headerEmployee'>
      <h1 className="employeeTitle">Manage Employees</h1> 
      <h2 className="employeeTitle2">Total Employees</h2>
      <p className='number'>0</p>
      <hr></hr>
      </div>
      <div className='line'></div>
      <div className='middle'>
       <p className='display'> Display employees by department</p>
       
       <div className='buttonsDepartment'>
        <button className='allDepartments'>All departments</button>
        <button className=' addDepartments'> Add Employees</button>
        </div>
        </div>
        <div className='table'>
        <table>
         <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>mobile number</th>
            <th>view</th>
            <th></th>
           </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>  
          </tr>
        </table>
        </div>
    </div>
     );
}
 
export default EmployeeDepartment;