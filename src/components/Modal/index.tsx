"use client";

import React from "react";

type ModalProps = {
  buttonContent: string | JSX.Element;
  children: React.ReactNode;
};

const Modal = ({ buttonContent, children }: ModalProps) => {
  const handleOpenModal = () => {
    const dialog = document.getElementById("my_modal_5") as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <button className="btn btn-primary btn-outline" onClick={handleOpenModal}>
        {buttonContent}
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
