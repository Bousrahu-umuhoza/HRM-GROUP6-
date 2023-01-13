import LeftSide from "../left/leftside";

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const Container = ({ children }: Props) => {
    return <div className="container ">
        <LeftSide />
        <div className="col-2">
        {children}
        </div>
    </div>
}