
import './verfication.css'
import  {Link} from "react-router-dom";
import { TextFieldExplained } from '../../components/input';
import { Container } from "../../components/container"
const Verification=()=>{
    return<Container>
           <div className="con-verfication">
            <p> Text message with a 6-digit verification codes was sent to your emails</p>
             <h3>Enter your code here</h3>
             <div className="text-container">
             <input type="text" maxLength={1}></input>
                    <input type="text" maxLength={2}></input>
                    <input type="text" maxLength={3}></input>
                    <input type="text" maxLength={4}></input>
                    <input type="text" maxLength={5}></input>
                    <input type="text" maxLength={6}></input>

{/* <button className="next">Next</button> */}

            </div>
            <Link to="/verify"><button className="next">Next</button></Link>
        </div>
    </Container>
    

    
}
export default Verification;