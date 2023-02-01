import { Link, useNavigate } from "react-router-dom"
import { Container } from "../container"
import { TextFieldExplained } from "../input/"
import './login.css'
import { Vector } from "../../assets/vecor"
import { FormEventHandler, useState } from "react";




function Login() {
    let emailValue = "";
    let passwordValue = "";
    let [errorMessage, setErrorMesage] = useState([])
    const goto = useNavigate();


    const authenticateWithTheBackend = async (
        apiUrl: string,
        email: string,  
        password: string
    ) => {
    
        const response = await fetch(apiUrl, {
            method: "post",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        });
    
        if(!response.ok){
            errorMessage = (await response.json()).message;
            setErrorMesage(errorMessage);
            
            return;
        }
        goto("/Dashboard");
        // redirect user to another page
    
    
    }  
    const onSubmitLoginForm: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const endpoint = form.action;
      

        authenticateWithTheBackend(
            endpoint,
            emailValue,
            passwordValue
        );
        
    }
    return <Container>
        <Link to="/signup" className="link2" >Signup</Link>
        <Link to="/login" className="link3" >Login</Link>
        <h3>Login</h3>
                <br/>
                
        <form 
            onSubmit={onSubmitLoginForm} 
            id="form" 
            className="flex flex-col"
            action="https://web-production-3d1f.up.railway.app/api/auth/login"
            method="post"
            >
            <TextFieldExplained required className="full-names" type="email" name="email" label="Email" onChange={(evt) => {
                emailValue = evt.target.value;
            }} variant="three" helperText="valid email" errorText="" placeholder={""} /> <br />
            <TextFieldExplained required className="full-names" type="password" name="password" label="Password" 
                onChange={(eventDetails) =>  {
                    passwordValue = eventDetails.target.value;  
                 }} variant="three" helperText="" placeholder={""} />
            <div  >
            <Link to="/forgot-password"className="hey"> forgot password?<Vector /></Link>
                </div>
            <br /><br />
            <div className="bottom">
            {errorMessage.length && 
                    errorMessage.map((message, index)=>{
                        return <p key={`error-${index}`} className="error-message">{message}</p>
                    })
                    }
             <button className="btn">Login</button>
            <br/><br/>
                <span className="span">Are you now here?
                <Link to="/signup" className="link1"> Signup </Link>
                    instead
                </span>
            </div>
        </form>
    </Container>
}
export default Login