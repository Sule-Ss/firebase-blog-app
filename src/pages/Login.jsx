import React, { useState } from "react";
import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/register-login.css";
import googleLogo from "../assests/google.png";
import { signIn, signUpProvider } from "../utils/firebaseUtils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    // console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="registerMain">
      <div className="registerContainer">
        <img src={blogLogo} alt="blog-logo" className="blogLogo" />
        <h1>── Login ──</h1>

        <form action="" onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Email"
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

          <Button variant="contained" className="registerButton" type="submit">
            Login
          </Button>
          <Button
            variant="contained"
            className="googleButton"
            onClick={handleProviderLogin}
          >
            WITH <img src={googleLogo} alt="google-logo" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
