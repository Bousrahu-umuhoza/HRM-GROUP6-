
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { TextFieldExplained } from "../../components/input"
import './forgot.css'

const ForgotPassword = ()=>{
    return <Container>
        <div className="forgetpassword-container">
            <h3 className="head-forgot">Forgot Password?</h3>
            <div>
            <TextFieldExplained  type="email" name="email" label="Email" className="input-changes" onChange={() => { } } variant="three" errorText="Error ..." placeholder={""} />
            <span className="receive-code">Back to <Link className="forgot-link" to='/login'>login</Link></span>
            </div>
            
            <div>
            <Link to="/verify"><button className="code">Send Code</button></Link>
            </div>
        </div>
    </Container>

}
export default ForgotPassword
