import css from "./ImageModal.module.css";

import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, largeImg: { dataSrc, dataAlt } }) => {
    Modal.setAppElement("#root");

    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.modal} overlayClassName={css.modalOverlay}>
                <img src={dataSrc} alt={dataAlt} className={css.modalImg} />
            </Modal>
        </>
    );
};

export default ImageModal;
