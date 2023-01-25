import { Checkbox, } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import './signup.css'
import { TextFieldExplained } from "../../components/input"

const SignUp = () => {

    const [visible,setVisible]= useState("");
     useEffect(()=>{
        setTimeout(()=>{
             setVisible('visible');
        },300 );
     }
     
     
     )

    return <Container>
                   
              <form id="form2" className={`second ${visible}`}>
              <Link className="linking" to='/Login'>login</Link>
                        <Link className="linking1" to='/signup'>Signup</Link> 
              <h2>SIGN UP</h2>

                  <TextFieldExplained type="text" name="FirstName" label="First name" className="input-changes" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />

                  <TextFieldExplained type="text" name="LastName" label="Last name" className="input-changes" onChange={() => {
            } } variant="three" errorText="Error ..." placeholder={""} />

                  <TextFieldExplained  type="text" name="Email" label="Email" className="input-changes" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />

                  <TextFieldExplained type="text" name="Password" label="Password" className="input-changes" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />
                   
                  <TextFieldExplained  type="text" name=" Confirm Password" label="Confirm password" className="input-changes" onChange={() => {
            } } variant="three" errorText="Error ..." placeholder={""} />
                  <div className="box1">
                  <input type="checkbox" /> 
                  i agree with terms and condition
                  </div>
                

                  <button className="initiate">SIGN UP</button>
                  
              </form>
    </Container>
}
export default SignUp


