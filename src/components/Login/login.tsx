import { Link } from "react-router-dom"
import { Container } from "../container"
import { TextFieldExplained } from "../input"
import './login.css'
import { Vector } from "../../assets/vecor"
import { FormEventHandler } from "react";


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
        const message = (await response.json()).message;
        alert(message);
        
        return;
    }
    alert("success!");
    // redirect user to another page
    

    


}

function Login() {
    let emailValue = "";
    let passwordValue = "";
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
            }} variant="three" errorText="Invalid email" placeholder={""} /> <br />
            <TextFieldExplained required className="full-names" type="password" name="password" label="Password" 
                onChange={(eventDetails) =>  {
                    passwordValue = eventDetails.target.value;  
                 }} variant="three" errorText="Error ..." placeholder={""} />
            <div  >
            <Link to="/forgot-password"className="hey"> forgot password?<Vector /></Link>
                </div>
            <br /><br />
            <div className="bottom">
            <Link to="/signup"> <button className="btn">Login</button></Link>
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