import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import "./styles.css"

const Modal = ({ children, onClose }: ModalProps) => {

    const modal = (
        <div className="modal-wrapper">
            <div className="modal">
                {onClose && <button onClick={onClose} className="modal-close">x</button>}
                {children}
            </div>
        </div>)


    return createPortal((modal), document.getElementsByTagName("body")[0])
}

export default Modal

interface ModalProps extends PropsWithChildren {
    onClose?: () => void
}