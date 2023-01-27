import { Link } from "react-router-dom";
import Header from "../Header/header";
import Door from "../../routes/Dash/door";
import Box from "../../routes/Dash/icons";
import Pipo from "../../routes/Dash/pipo";

import IconR from "../../routes/Dash/reporticon";

import CalendarForm from "../../routes/Dash/calendericon";

type Props = {
    visible: boolean
    
}
const SideNav = ({visible}: Props) => {
    const visibleClass = visible ? "visible" : "";

return <div className="">
        
        <nav className={`side-nav ${visibleClass}`}>
            <Link className="link" to="/Dashboard" id='one'><Door /> Dashboard</Link>
            <Link className="link" to="/department" id='two'><Box />  Department</Link>
            <Link className="link" to="/employees" id='three'> <Pipo /> Employees </Link>
            <Link className="link" to="/slips" id='four'> <Pipo /> PaySlip</Link>
            <Link className="link" to="/calender" id='five'> <CalendarForm/></Link>
            <Link className="link" to="/report" id='six'> < IconR/> Report</Link>


        </nav>
    </div>
}
export default  SideNav;