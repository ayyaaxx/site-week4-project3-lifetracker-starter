import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import jwtDecode from "jwt-decode";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userName, setUserName] = useState();
  const [sleeptime, setStartTime] = useState("");
  const [waketime, setEndTime] = useState("");
  const [user_id, setUser_Id] = useState(0); 

  useEffect(() => {
    const checkLoggedIn = () => {
      //check if the user is logged in when the user first accesses the webapp
      const token = localStorage.getItem("token");
      if (token) {
        //decode the stored token
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName);

        if (decodedToken.exp * 1000 > Date.now()) {
          setLoggedIn(true);
        } else {
          //Token has expired, log out the user
          handleLogout();
        }
      }
    };

    checkLoggedIn();
  }, []);

  const handleLogin = async (email, password, user_id ) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, user_id }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // const { token } = response.data;
        setUser_Id(data.user.id); 
        const { token } = data;
        localStorage.setItem("token", token);

        //Successful Login
        setLoggedIn(true);
        setLoginError("");
        console.log(data.message); //optional - display a success message
        console.log(data.user.name); //another way to get the username

        const decodedToken = jwtDecode(token); //a way to get username from token
        setUserName(decodedToken.userName);
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
  const handleRegistration = async (
    name,
    email,
    password,
    username,
    last_name
  ) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, username, last_name }),
      });

      //wait for the response
      const data = await response.json();

      if (response.status === 201) {
        //get the token information and store in localStorage
        const { token } = data;
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token); //a way to get username from token
        setUserName(decodedToken.userName);

        //Registration successful
        setLoggedIn(true);
        console.log(data.message); //optional - display a success message
      } else {
        //REgistration failed
        console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleLogout = () => {
    //remove the stored token and setLoggedIn as false
    localStorage.removeItem("token");
    setLoggedIn(false);
    // window.location = "/"
  };

  const [appState, setAppState] = useState({
    isProcessing: false,
    data: [],
  });

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          {loggedIn ? (
            <div>
              <Routes>
                <Route
                  path="/activity"
                  element={<ActivityPage appState={appState} />}
                />
                <Route path="/nutrition" element={<NutritionPage />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/sleep"
                  element={
                    <SleepPage
                      sleeptime={sleeptime}
                      setStartTime={setStartTime}
                      waketime={waketime}
                      setEndTime={setEndTime}
                      user_id = {user_id}
                    />
                  }
                />
                {/* Add more routes here */}
              </Routes>
            </div>
          ) : (
            <>
              <Routes>
                <Route
                  path="/login"
                  element={
                    <LoginPage
                      handleLogin={handleLogin}
                      loginError={loginError}
                    />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <RegistrationPage handleRegistration={handleRegistration} />
                  }
                />
                <Route path="/" element={<Home />} />
                <Route
                  path="/activity"
                  element={
                    <p className="non-activity">
                      {" "}
                      You have to be logged in to view your activity page
                    </p>
                  }
                />
                <Route
                  path="/nutrition"
                  element={
                    <p className="non-nutrition">
                      {" "}
                      You have to be logged in to view your nutrition page
                    </p>
                  }
                />
                <Route
                  path="/sleep"
                  element={
                    <p className="non-sleep">
                      {" "}
                      You have to be logged in to view your sleep page{" "}
                    </p>
                  }
                />
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
