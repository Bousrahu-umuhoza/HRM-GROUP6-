import "./comp.css"
import {TextFieldExplained} from "../components/input"
const Components =() =>{
return (
<div className="create">
<TextFieldExplained  type="text" name="fullNames" label="FullName*" helperText="SupportingText" onChange={ ()=>{

}} variant="one" errorText="Error ..." /> <br />


<TextFieldExplained  variant="two"  type="text" name="fullNames" label="FullName*" helperText="SupportingText" onChange={ ()=>{

}} errorText="Error ..." /> <br />

<TextFieldExplained  type="text" name="fullNames" label="FullName*" helperText="SupportingText" onChange={ ()=>{

}} variant="three" errorText="Error ..." /> <br />

<TextFieldExplained name={"PassW"} variant={"four"} label={""} placeholder="Password"/>

</div>
)

}
export default Components;
