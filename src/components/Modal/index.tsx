import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

const Modal = ({ children, onClose }: ModalProps) => {
  const modal = (
    <div className="modal-wrapper">
      <div className="modal">
        {onClose && (
          <button onClick={onClose} className="modal-close">
            X
          </button>
        )}
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementsByTagName("body")[0]);
};

Modal.Panel = ({ children }: PropsWithChildren) => (
  <div className="modal-panel">{children}</div>
);

export default Modal;

interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
}
