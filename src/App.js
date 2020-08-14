import React, {useState} from 'react';
// USE HashRouter vs BrowserRouter to display on Github
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Form, FormControl, Modal, Button} from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';

import logo from './logo-white.png';
import './App.css';
// import Modal from './components/modal';
import Home from "./pages/home";
import AddApplication from './pages/addApplication';
import ViewApplication from './pages/viewApplications';
import EditApplication from './pages/editApplication';

function App() {

  const [feedback, setFeedback] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const currentYear = new Date().getFullYear();

  console.log(showModal)

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

  return (
    <div className="App">
      <header className="">
        <div id="brand">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header">
          JAM
        </p>
        </div>

        <Nav variant="" className="nav">
          <Nav.Link id="view" className="nav" href="/jam/#/view">View App</Nav.Link>
          <Nav.Link className="nav" href="/jam/#/add">Add App</Nav.Link>
        </Nav>
        <Form inline id="search-form">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>

      </header>

      <Router >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/view" component={ViewApplication} />
          <Route exact path="/add" component={AddApplication} />
          <Route exact path="/edit" component={EditApplication} />
        </Switch>
      </Router>
      
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
            onChange={e => setFeedback({ ...feedback, 'email': e.target.value })}
          />
          <textarea id="feedbackBox"
            type="textarea"
            name="feedback"
            placeholder="feedback"
            onChange={e => setFeedback({ ...feedback, 'feedback': e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>Discard</Button> */}
          <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>      

      <footer className="footer">
        &copy; Copyright { currentYear }, All Rights Reserved
        <Button 
          variant="white" 
          id="feedback"
          onClick={() => setShowModal(true)}
        >Leave Comment</Button>
      
      
      </footer>
    </div>
  );
}

export default App;
