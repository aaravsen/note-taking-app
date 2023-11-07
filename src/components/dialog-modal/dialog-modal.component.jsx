import { useEffect, useRef } from "react";
import "./dialog-modal.style.scss";

const DialogModal = ({ children, isOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className="dialog-container">
      {children}
    </dialog>
  );
};

export default DialogModal;
