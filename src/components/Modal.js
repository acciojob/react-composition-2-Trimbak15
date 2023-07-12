import React from "react";

const Modal = ({show, onClose, children}) => {
    if(!show){
        return null;
    }

    const handleChange = () => {
        onClose();
    }

    return(
        <div className="modal">
            <div className="modal-overlay" onClick={handleChange}>

            <button className="modal-close" onClick={onClose}>Close</button>

                {children}
                
            </div>
        </div>
    )
}

export default Modal;