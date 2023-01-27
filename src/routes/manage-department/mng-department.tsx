import './departmentManagement.css'
const DepartmentManagement = () => {
    return (
        <div className='DepartmeContainer'>
        <div className='header'>
      <h1 className="departmentTitle">Manage Departments</h1> 
      <h2 className="departmenttitle2">Total Departments</h2>
      <p className='number'>0</p>
      <hr></hr>
      </div>
      <div className='line'></div>
      <div className='middle'>
        <button className=' add'> Add Departments</button>
        </div>
        <div className='table'>
        <table>
         <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Designation</th>
            <th>Number of Employees</th>
           </tr>
          <tr>
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

export default DepartmentManagement;