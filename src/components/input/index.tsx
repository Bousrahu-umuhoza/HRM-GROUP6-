 type Props = {
    type: "text" | "email" | "password" | "number",
    label: "string",
    helperText: "text",
    error: "text"
    onchange: (evt: Event)=>void

}
const Input = (props: Props) =>{
    return (
    <div
        className= {'text-field ${props}'}>
        <label>{props.label}</label>
        <input type={props.type} placeholder={props.label}/>
        <span>{props.helperText}</span>
    
    </div>
    )
}

export default Input;
 