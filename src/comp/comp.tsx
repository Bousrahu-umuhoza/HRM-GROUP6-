import "./comp.css"
import Text from "../Text/text"
import Input from "../components/input"
const Components =() =>{
return (
<div className="create">
<Text  type="text" name="fullNames" label="FullName*" helperText="SupportingText" onChange={function (evt: Event): void {
            throw new Error("Function not implemented.")
        } } variant={""} errorMessage={""}/> <br />
<Text type="password" name="password" label="password*" helperText="SupportingText" onChange={function (evt: Event): void {
            throw new Error("Function not implemented.")
        } } variant={""} errorMessage={""}/> <br />
<Text type="email" name="email" label="Email*" helperText="SupportingText" onChange={function 

(evt: Event): void {
            throw new Error("Function not implemented.")
        } } variant={""} errorMessage={""}/> <br />  

</div>
)

}
export default Components;
