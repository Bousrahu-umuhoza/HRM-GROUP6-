// import input from "./input";
import { dividerClasses } from "@mui/material";
import{Link} from "react-router-dom";
import { Container } from "../../components/container"
import './verfy.css'
function CodeVerify(): JSX.Element {
    return <Container>
        <div className="input-container">
                <h3>Verification</h3>

                <h4>Enter Verfication Code</h4>
                <div className="six">
                   
                    <input type="text"  className="round"/>
                    <input type="text"  className="round"/>
                    <input type="text"  className="round"/>
                    <input type="text"  className="round"/>
            </div>
            
           <span>if you didn't receive code. <a href="forgot-password" className="Resend-password">Resend</a></span>
            <Link to="/reset-password"><button className="code">Send </button></Link>
            </div>
        </Container>

     
}
export default CodeVerify;