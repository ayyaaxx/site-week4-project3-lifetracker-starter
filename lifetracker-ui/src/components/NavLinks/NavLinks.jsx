import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ loggedIn, setLoggedIn }) => {
 
  const handleLogout = () => {
    //remove the stored token and setLoggedIn as false
    localStorage.removeItem("token");
    setLoggedIn(false);
    window.location = "/"
  };
  

  return (
    <div className="nav-links">
      <Link to="/activity" className = "nav-link">Activity</Link>
      <Link to="/nutrition" className = "nav-link">Nutrition</Link>
      <Link to="/resources" className = "nav-link">Resources</Link>
      {loggedIn ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
       
        
      ) : (
        <>
          <Link to="/login" className="nav-link login-link">Login</Link>
          <Link to = "/register" className = "nav-link"> Register</Link>
        </>
      )}
    </div>
  );
};

export default NavLinks;
