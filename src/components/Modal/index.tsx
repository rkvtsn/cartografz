import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import "./styles.css"

const Modal = ({ children }: PropsWithChildren) => {

    const modal = (
        <div className="modal-wrapper">
            <div className="modal">
                {children}
            </div>
        </div>)


    return createPortal((modal), document.getElementsByTagName("body")[0])
}

export default Modal