import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import $ from "jquery";


export default (props) => {

    const [feedback, setFeedback] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = () => {
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "site": "jam", "email": "tv@chindowns.com", "feedback": "8th test from JAM to localhost:4000" });

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "site": "jam", "email": "tv@chindowns.com", "feedback": "8th test from JAM to localhost:4000" }),
            mode: 'no-cors',
            credentials: 'omit',

            redirect: 'follow'
        };

        fetch("http://localhost:4000/api/feedback", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        handleClose();
    }

    useEffect(() => {
        if (props.showModal){
            handleShow();
        }
    },[props.showModal])

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
                type="email"
                name="email"
                placeholder="email" 
                onChange={e => setFeedback({...feedback, 'email': e.target.value})}
                />
                <textarea id="feedbackBox"
                type="textarea"
                name="feedback"
                placeholder="feedback"
                onChange={e => setFeedback({...feedback, 'feedback': e.target.value})}
                />
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>Discard</Button> */}
                <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}