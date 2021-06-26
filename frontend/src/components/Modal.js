import React, { useEffect } from "react";

export default function Modal(props) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
    // this.showModal = true;
    // this.showModal = false;
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  // if (!props.show) {
  //   return null;
  // }
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h4 className="modalTitle">{props.title}</h4>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
        <div className="modalBody">{props.children}</div>
        {/* <div className="modalFooter"></div> */}
      </div>
    </div>
  );
}
