import { usePreLoadImages } from "../../hooks/usePreLoadImages";
import Modal from "../Modal";
import IconLoading from "../Svg/IconLoading";
import "./styles.css";

const ModalLoading = () => {
  const { isLoading } = usePreLoadImages();

  if (!isLoading) return null;

  return (
    <Modal className="modal-loading">
      <Modal.Panel>
        <IconLoading
          className="modal-loading__icon-loading"
          color="#fff"
          fill="transparent"
        />
      </Modal.Panel>
    </Modal>
  );
};

export default ModalLoading;
