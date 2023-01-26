// import input from "./input";
import { dividerClasses } from "@mui/material";
import{Link} from "react-router-dom";
import { Container } from "../../components/container"
import './verfy.css'
function CodeVerify(): JSX.Element {
    return <Container>
        <div className="input-container">
            <div className="data-container">
                <h3>Verification</h3>

                <h4>Enter verfication Code</h4>
                <br></br><br></br>
                {/* <button className="code"> verfy code by phone number or email</button> */}
                <div className="six">
                    <input type="text" maxLength={1}></input>
                    <input type="text" maxLength={2}></input>
                    <input type="text" maxLength={3}></input>
                    <input type="text" maxLength={4}></input>
                    <input type="text" maxLength={5}></input>
                    <input type="text" maxLength={6}></input>
                </div>
            </div>
            </div>
           <p>if you didn't receive code. <a href="newpassword">Resend</a></p>
            <Link to="/verfication"><button className="code">Send </button></Link>
        </Container>

     
}
export default CodeVerify;