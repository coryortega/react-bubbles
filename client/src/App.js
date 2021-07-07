import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import BubblePage from "./components/BubblePage"
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
        <PrivateRoute path="/bubblepage">
          <BubblePage />
        </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
