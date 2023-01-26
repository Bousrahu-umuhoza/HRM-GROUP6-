import './home.css'
import image from "./assets/image 1.png";
import { Link } from 'react-router-dom';

export const HomePage=()=>{
    return<div className='back-ground' >
      <h1>HR <span className='building-con'> Building customer connections</span></h1>
        <div className='paragraph1'>
        <p>You've Got This! Or Maybe You Don't. <br/>
        Get An HR Check-up And Find Out in 10 minutes<br/> where Your Business Stands.</p>
        </div>
        <div className='homepage-button'>
        <span className='check'>
        <Link className='link' to='/login'> <button>HR Check-up</button></Link> 
       
        </span>
        </div>
        

        <div className='resource'>
          <p>If Human Resource Management Feels <span className='black-color'>Over</span>whelming,<br/> 
            <span className='black-color'> It doesn't have to be</span> </p>  
        </div>

        
       
    </div>


}