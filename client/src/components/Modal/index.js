import React from "react";
import Form from "../Form";

function Modal() {
  return (
    <div className="d-flex flex-row mb-4">
      <button
        type="button"
        className="btn btn-primary animate__animated animate__fadeIn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Free Estimate
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Free Estimate
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
