import React, { useState } from "react";
import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/register-login.css";
import googleLogo from "../assests/google.png";
import { createUser } from "../utils/firebaseUtils";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);

    //  console.log(fullName)
  };

  return (
    <div className="registerMain">
      <div className="registerContainer">
        <img src={blogLogo} alt="blog-logo" className="blogLogo" />
        <h1>── Register ──</h1>

        <form action="" onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            defaultValue=""
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            required
            id="outlined-required"
            label=", password"
            defaultValue=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" type="submit" className="registerButton">
            Register
          </Button>
          <Button variant="contained" className="googleButton">
            WITH <img src={googleLogo} alt="google-logo" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
