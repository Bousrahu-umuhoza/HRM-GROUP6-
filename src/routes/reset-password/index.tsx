import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { TextFieldExplained } from "../../components/input"

export const ResetPassword = ()=>{
    return <Container>
         <div className="forgetpassword-container">
            <h3 className="head-forgot">New Password</h3>
            <div>
            <TextFieldExplained  type="password" name="password" label="Enter New Password" className="input-changes" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />
            <br/>
            <TextFieldExplained  type="password" name="confirm password" label="Confirm Password" className="input-changes" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />           
            </div>
            
            <div>
            <Link to="/dashboard"><button className="code">Send</button></Link>
            </div>
        </div>
    </Container>
}