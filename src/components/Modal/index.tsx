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
        <div className="modal-box flex">
          <form method="dialog" className="sm:hidden block">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
