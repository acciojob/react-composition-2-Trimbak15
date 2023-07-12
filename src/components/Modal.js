import React from "react";

const Modal = ({show, onClose, children}) => {
    if(!show){
        return null;
    }

    return(
        <div className="modal">
            <div className="model-overlay">

            <button className="model-close" onClick={onClose}>Close</button>
            
                {children}
                
            </div>
        </div>
    )
}

export default Modal;