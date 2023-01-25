
import "./add.css"
export const AddEmployees = () => {

    return (

        <form className=" form-add-employ">
             <h3>Add Employees  </h3> 
            <div className="input-container">
                <label htmlFor="" className="label21">Employees ID</label>
                <input type="text" className="field1" placeholder="Employment ID" />
                <div className="id-2">
                    <label htmlFor="" className="label20">Employment ID</label>
                    <input type="text" className="field2" placeholder="Department" />
                </div>
                <label htmlFor="" className="label3">Employee's Name</label><br />
                <input type="text" className="email1" placeholder="First name" />
                <div className="second-name">
                    <input type="text" className="field" placeholder="Second name" />
                </div>
                <label htmlFor="" className="label1">Email</label>
                <input type="password" className="email" placeholder="Enter employee's email" />
                <div className="qualification">
                    <label htmlFor="" className="label2">Qualification</label>
                    <input type="password" className="field10" placeholder="Enter employee's qualification" />
                </div>
                <label htmlFor="" className="label5">Address</label>
                <input type="email" className="email5" placeholder="Enter employee's address" />

                <label htmlFor="" className="label35">joining salary</label>
                <input type="text" className="email5" placeholder="Joining salary" />

                <div className="mobile-number">
                    <label htmlFor="" className="label13">Mobile number</label>
                    <input type="text" className="field13" placeholder="enter employee mobile number" />
                </div>
                <label htmlFor="" className="label6">ID number</label>
                <input type="text" className="email6" placeholder="Enter employee's ID number" />

                <div className="gender">
                    <label htmlFor="" className="label11">Gender</label>
                    <input type="gender" className="field11" placeholder="" />

                </div>
                <button className="btn-sub">Submit</button>
            </div>
        </form>

    )

}
export default AddEmployees;