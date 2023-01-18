import React from "react"
import { Link } from "react-router-dom"
import { TextFieldExplained } from "../input"
import LeftSide from "../left/leftside"
import './signup.css'

const SignUp = () => {
    return <div>
        <div className="register ">

            <LeftSide />

            <div className="col-2">
                {/* <Link to="/signup" className="link2" >SignUp</Link>
            <Link to="/login" className="link3" >Login</Link>  */}
                <h3>Signup</h3>
                <form id="form" className="flex flex-col">


                    <TextFieldExplained type="text" name="FirstName" label="FirstName" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />

                    <TextFieldExplained type="text" name="LastName" label="LastName" onChange={() => {
                    } } variant="three" errorText="Error ..." placeholder={""} />

                    <TextFieldExplained type="text" name="Email" label="Email" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />

                    <TextFieldExplained type="text" name="Password" label="Password" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />

                    <TextFieldExplained type="text" name=" Confirm Password" label="Confirm Password" onChange={() => {
                    } } variant="three" errorText="Error ..." placeholder={""} />

                    <button className="btn">Signup</button>

                </form>
            </div>


        </div>
    </div>
}
export default SignUp


