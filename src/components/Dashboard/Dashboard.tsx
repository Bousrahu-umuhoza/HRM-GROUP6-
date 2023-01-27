
import './dash.css'
import Header from "../Header/header";
import Heads from '../../routes/Dash/pipo2';
import Rectangle from '../../routes/Dash/rectangle';
import Nike from '../../routes/Dash/nike';
import SideNav from './links';
import Data from '../../routes/Dash/statitics';
// import BarChart from '../../routes/Dash/barchart';


   const Links =()=>{
    return <>
    <Header/>
    <SideNav visible/>
    <Data/> 
    {/* <BarChart/> */}
    <div className='total-employees'>
        <Heads/>
        <p id='number'>110</p>
            <p id='words'>Total Employees</p>
        </div>
        
        <div className='total-department'>
        <Rectangle/>
        <p id='number1'>15</p>
            <p id='word'>Total Department</p>
        </div>

        <div className='total-payslip'>
         <Nike/>
        <p id='number2'>0</p>
            <p id='wordss'>Number of total Payslips</p>
        </div>
        <div className='job-applies'>
        <Heads/>
        <p id='number4'>77</p>
            <p id='words4'>Job Application</p>
        </div>
        </>
}
export default Links;