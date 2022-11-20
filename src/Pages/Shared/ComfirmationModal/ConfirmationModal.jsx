import React from "react";

const ConfirmationModal = ({title, description,modalData, handleDeleteDoctor}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {description}
          </p>
          <div className="modal-action">
            <label onClick={()=>handleDeleteDoctor(modalData)} htmlFor="confirmation-modal" className="btn btn-secondary btn-outline">
              DELETE
            </label>
            <label htmlFor="confirmation-modal" className="btn btn-outline">
              CANCEL
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
