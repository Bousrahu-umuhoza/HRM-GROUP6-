import React, { FormEventHandler, useState } from "react";
import "./text.css"

type Props ={
name: string,
label : string,
type : string,

 onChange: (evt: Event)=>void
variant: string,
helperText: string,
errorMessage: string
}

const Text =(props: Props) =>{
let [value, setValue] = useState("");

const _inputValueChanged: FormEventHandler<HTMLInputElement> = (evt) => {
    const input = evt.target as HTMLInputElement;
    setValue(input.value);

}

const tansform = value == "" ? "" : "transform";

return <div className={`text-field ${tansform} ${props.variant}`}>
<input onInput={_inputValueChanged} type={props.type} placeholder={props.label} />
<label>{props.label}</label>
<span>{props.helperText}</span>

</div>




    }


export default Text;
