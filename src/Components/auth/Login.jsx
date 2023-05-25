// import React from 'react'
import { useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verifyUser = () => {
   const response = axios.post(
     "https://gaurav.tunnel.yarsagames.com/auth/login",
     {
       email: email,
       password: password,
     }
   );
   const accessToken= localStorage.getItem('accessToken')
    console.log(accessToken)
    setEmail("");
    setPassword("");
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    verifyUser();
  };

  return (
    <>
      <div className="container">
        <h3 className="heading">Login</h3>
        <form>
          <div className="email">
            <p>Enter your email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              autoComplete="current-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <p>Enter your password</p>
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="register-from-other-route">
            <Link to="/signup">
              didn't have an account? <span>sign in</span>
            </Link>
          </div>
          <div className="Btn">
            <button className="btn" onClick={signIn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
