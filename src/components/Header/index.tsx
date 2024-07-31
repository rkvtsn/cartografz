import { PropsWithChildren } from "react"
import "./styles.css"


const Header = ({children}: PropsWithChildren) => {
    return (
        <div className="header">
            {children}
        </div>
    )
}

export default Header
