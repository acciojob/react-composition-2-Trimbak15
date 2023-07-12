
import React,{useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

    const handleChange = () => {
        setShowModal(false);
    }
    console.log("hello")

    return(
        <div>
            <div className="model-show">
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            </div>
            <Modal show={showModal} onClose={handleChange}>
            <p>This is the content of the modal.</p>
            </Modal>
        </div>

    )
}

export default App
