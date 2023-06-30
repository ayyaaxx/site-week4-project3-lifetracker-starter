import "./App.css";
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";

// const [appState, useAppState] = useState([])

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  // const [isProcessing, setIsProcessing] = useState(false);

  // const startProcessing = () => {
  //   setIsProcessing(true);
  // };

  // const stopProcessing = () => {
  //   setIsProcessing(false);
  // };
  
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        //Successful Login
        setLoggedIn(true);
        setLoginError("");
        console.log(data.message); //optional - display a success message
      } else {
        //Login failed
        setLoginError(data.message);
        console.log(data.message); //optional - display error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Registration function to handle registration
  const handleRegistration = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      //wait for the response
      const data = await response.json();

      if (response.ok) {
        //Registration successful
        setLoggedIn(true);
        console.log(data.message); //optional - display a success message
        
      } else {
        //Registration failed
        console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  // };

  const [appState, setAppState] = useState({
    isProcessing: false,
    data: []
  })


  return (
    <div className="app">
       <Router>
    <main>
    <Navbar loggedIn={loggedIn} />
      {loggedIn ? (
        <div>
         
          <Routes>
            <Route path =  "/activity" element = {<ActivityPage appState = {appState} />}/>
           
            {/* Add more routes here */}
          </Routes>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<LoginPage handleLogin={handleLogin} loginError={loginError} />} />
            <Route path="/register" element={<RegistrationPage handleRegistration={handleRegistration} />} />
            {/* Add more routes here */}
          </Routes>
        </>
      )}
         
        </main>
      </Router>
    </div>
  );
}

export default App;
