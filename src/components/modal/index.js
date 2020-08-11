import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default (props) => {

    const [feedback, setFeedback] = useState({});
    const [feedbackArr, setFeedbackArr] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleSubmit = () => {
        
    }

    useEffect(() => {
        if (props.showModal){
            handleShow();
        }
    },[props.showModal])

    console.log(props)


    return (
        <Modal show={showModal} onHide={handleClose}  >
            <Modal.Header closeButton>
                <Modal.Title>Comment or Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                Let me know what you think about this app.  If you would like a response, leave your email, otherwise empty is fine.
                </p>
                <input id="email"
                class=""
                type="email"
                name="email"
                placeholder="email" 
                onChange={e => setFeedback({...feedback, 'email': e.target.value})}
                />
                <input id="feedback"
                type="text"
                name="feedback"
                placeholder="feedback"
                onChange={e => setFeedback({...feedback, 'feedback': e.target.value})}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Discard</Button>
                <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}