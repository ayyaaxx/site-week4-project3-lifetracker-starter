import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ handleRegistration }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUserName] = useState("")
  const [last_name, setLastName] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(name, email, password, username, last_name);
  };

  return (
    <>
      <div className="registration-form-container">
      <div className="create-account">
        <h2>Create an account </h2>{" "}
         <img
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="user icon"
        />
      </div>
        <form onSubmit={handleSubmit}>
        <label>Email: </label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        
        <label>Username: </label>
        <input
          className="form-input"
          type="username"
          name="username"
          value={username}
          onChange= {(e) => setUserName(e.target.value)}
          placeholder="Username"
        />

          <label>Name: </label>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />

        <label>Last Name: </label>
        <input
          className="form-input"
          type="text"
          name="Lastname"
          value={last_name}
          onChange= {(e) => setLastName(e.target.value)}
          placeholder="Lastname"
        />

        <label>Password: </label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />

        <label>Confirm Password: </label>
        <input
          className="form-input"
          type="password"
          name="confirm Password"
          value={confirmPassword}
          onChange= {(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />

          <button className="submit-registration" type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;

