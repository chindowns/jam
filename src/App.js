import React from 'react';
// USE HashRouter vs BrowserRouter to display on G
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Form, FormControl, Button} from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';

import logo from './logo-white.png';
import './App.css';
import Home from "./pages/home";
import AddApplication from './pages/addApplication';
import ViewApplication from './pages/viewApplications';
import EditApplication from './pages/editApplication';

function App() {

  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header">
          JAM
        </p>

        <Nav variant="" className=" nav m-auto">
          {/* <Nav.Link variant="outine" className="nav" eventKey="link-1" href="/jam/#/home">Home</Nav.Link> */}
          <Nav.Link className="nav" href="/jam/#/view">View Application</Nav.Link>
          <Nav.Link className="nav" href="/jam/#/add">Add Applications</Nav.Link>
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
    </div>
  );
}

export default App;
