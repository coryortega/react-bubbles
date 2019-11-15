import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function NavBar() {

    return (
        <div className="Navbar">
          <ul>
            <p>
              <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/bubblepage">Bubbles!</Link>
            </p>
            <p>
             <Link onClick = {() => localStorage.clear()} to="/login">Log Out</Link>   
            </p>
          </ul>
        </div>

    );
  }
  
  export default NavBar;