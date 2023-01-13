import React from "react"
import { Link } from "react-router-dom"
import { Container } from "../container"
import { TextFieldExplained } from "../input"
import LeftSide from "../left/leftside"
import './login.css'

function Login() {
    return <Container>
      
                {/* <Link to="/signIn" className="link2" >SignIn</Link>
             <Link to="/login" className="link3" >Login</Link>  */}
                <h3>Login</h3>

                <form id="form" className="flex flex-col">

                    <TextFieldExplained className="full-names" type="text" name="fullNames" label="FullName*" helperText="SupportingText" onChange={() => {

                    }} variant="three" errorText="Error ..." /> <br />
                    <TextFieldExplained type="text" name="Password" label="Password" onChange={() => {
                    }} variant="three" errorText="Error ..." />

                    <button className="btn">Login</button>

                </form>
            
       </Container>

}
export default Login