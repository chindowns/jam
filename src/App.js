import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo-white.png';
import './App.css';
import './Custom.scss'
import AddApplication from './pages/addApplication';
import ViewApplication from './pages/viewApplications';
import EditApplication from './pages/editApplication';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header">
          JAM
        </p>
        
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={ViewApplication} />
          <Route exact path="/view" component={ViewApplication} />
          <Route exact path="/add" component={AddApplication} />
          <Route exact path="/edit" component={EditApplication} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
