import { Checkbox, } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { TextFieldExplained } from "../input"
import { Container } from "../../components/container"
import './signup.css'

const SignUp = () => {
    return <Container>
                   
              <form id="" className="second">
              <Link className="linking" to='/Login'>Signup</Link>
                        <Link className="linking1" to='/signup'>Login</Link> 
              <h2>SIGN UP</h2>

                  <TextFieldExplained type="text" name="FirstName" label="First name" className="input-changes" onChange={() => { }} variant="three" errorText="Error ..." />

                  <TextFieldExplained type="text" name="LastName" label="Last name" className="input-changes" onChange={() => {
                  }} variant="three" errorText="Error ..." />

                  <TextFieldExplained  type="text" name="Email" label="Email" className="input-changes" onChange={() => { }} variant="three" errorText="Error ..." />

                  <TextFieldExplained type="text"  name="Password" label="Password" className="input-changes" onChange={() => { }} variant="three" errorText="Error ..." />
                   
                  <TextFieldExplained  type="text" name=" Confirm Password" label="Confirm password" className="input-changes" onChange={() => {
                  }} variant="three" errorText="Error ..." />
                  
                  <input type="checkbox" className="box1"/> 
                  <p>i agree with terms and condition</p>

                  <button className="initiate">SIGN UP</button>
                  
              </form>
    </Container>
}
export default SignUp


