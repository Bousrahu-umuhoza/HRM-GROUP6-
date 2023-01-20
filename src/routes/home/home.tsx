import './home.css'
import image from "./assets/image 1.png";
import { Link } from 'react-router-dom';

export const HomePage=()=>{
    return<div className='back-ground' >
       
        <h1>HR done differently</h1>
        <p>You've Got This! Or Maybe You Don't. <br/>
        Get An HR Check-up And Find Out in 10 minutes<br/> where Your Business Stands.</p>
    
        <span className='check'>
        <Link className='link' to='/login'> <button>HR Check-up</button></Link> 
       
        </span>

        <span className='resource'>
          <p>If Human Resource Management Feels Overwhelming,<br/> It doesn't have To Be </p>  
        </span>

        
       
    </div>


}