import './style.css'
type Props={ 
    type: "button" | "submit",
    children: JSX.Element | JSX.Element[] | string,
    variant: "elevated" | "filled" | "tonal" | "outlined" | "text",
    onclick?:()=>void

}
const Button = (props: Props) =>{

return( 
    <button onClick={props.onclick} className={`btn ${props.variant}`}>
        {props.children}
       
    </button>

)

}
export default Button