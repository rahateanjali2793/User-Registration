import React from 'react';
import {BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Logout from './Logout';
 
function App() {
  return (

    <Router>
     <Route exact path="/" component={Login} />
     <Route path="/home" component={Home} />
     <Route path="/signup" component={Signup} />
     <Route path="/Logout" component={Logout} />
    </Router>

     
  
  );
}

export default App;
