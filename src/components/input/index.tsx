
import "./style.css"
import { ChangeEventHandler, useState } from "react";

type Props = {
    name: string, 
    type?: "email" | "password" | "text" | "number" | "date" | "Username", 
    variant: "one" | "two" | "three" | "four", 
    label: string,
    helperText?: string,
    errorText?: string,
    placeholder?: string,
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
   
}
export const TextFieldExplained = ({ 
    name, 
    type = "text", 
    variant =  "one", 
    label, 
    helperText, 
    onChange,
    placeholder,
    errorText,
    className = "",
}: Props) => {
    const [inputValue, setInputValue] = useState("");
    const inputId = name;
    // const emptyInput = inputValue !== "" ? "not-empty" : "";
    let emptyInput;
    if(inputValue == ""){
        emptyInput = "";
    }else{
        emptyInput = "not-empty";
    }
    
    return <div className={`txt-field ${variant} ${emptyInput} ${className}`} >
        
        <input id={inputId} name={name} type={type} onChange={v=>{
            setInputValue(v.target.value);
            if(onChange) {
                onChange(v);
            }
        }} />
        <label htmlFor={inputId}>{label}</label>
        {
        !helperText ?  null :
        <span className="helper-text">{helperText}</span>
        }
         {
        !errorText ?  null :
        <span className="error-text">{errorText}</span>
        }
        {
        !placeholder ?  null :
        <span className="placeholder">{}</span>
        }
        
    </div>
}

