import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from "./Auth/loginCompo";
import Signup from "./Auth/signupCompo";

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" /> */}
        <Route path='/' exact  element={<Login />} />
        <Route exact path="/signup"  element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;