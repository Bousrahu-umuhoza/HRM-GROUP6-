import React from "react"
import { Link } from "react-router-dom"
import { Container } from "../container"
import { TextFieldExplained } from "../input"
import LeftSide from "../left/leftside"
import './login.css'
import { People } from "../../assets/icon"
import { Vector } from "../../assets/vecor"

function Login() {
    return <Container>
      
                <Link to="/signup" className="link2" >Signup</Link>
             <Link to="/login" className="link3" >Login</Link> 
                <h3>Login</h3>
                
                <form id="form" className="flex flex-col">

                    <TextFieldExplained className="full-names" type="text" name="Email" label="Email" onChange={() => {
            } } variant="three" errorText="Error ..." placeholder={""} /> <br/>
                    <TextFieldExplained className="full-names" type="text" name="Password" label="Password" onChange={() => {
            } } variant="three" errorText="Error ..." placeholder={""} />
                    <p className="hey">forgot password?
                        <Vector/>
                    </p> <br/><br/>
                    <div className="bottom">
                    <button className="btn">Login</button><br/>
                    <span className="span">Are you now here?
                    <Link to="/signup" className="link1"> Signup </Link>
                    instead
                    </span>
                    </div>
                  

                </form>
            
       </Container>

}
export default Login