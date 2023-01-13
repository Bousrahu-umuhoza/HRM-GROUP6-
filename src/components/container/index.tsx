import LeftSide from "../left/leftside";
import "./style.css";

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const Container = ({ children }: Props) => {
    return <div className="app-container">
        <div className="form-container">
        <LeftSide />
        <div className="container__col-2">
        {children}
        </div>
    </div>
    </div>
}