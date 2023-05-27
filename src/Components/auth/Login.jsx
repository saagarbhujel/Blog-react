// import React from 'react'
import { useEffect, useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { LOGIN_URL } from "../../constants";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("")



  const verifyUser = async() => {
    const response = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
    });
    const accessToken = response.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(accessToken);
    setEmail("");
    setPassword("");
     window.location.href = "/";
  };


  const signIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    verifyUser();
  };


  useEffect(()=>{
    const storedAccessToken = localStorage.getItem('accessToken')
    if(storedAccessToken){
      setAuthToken(storedAccessToken)
      
    }
  },[])

  return (
    <>

        <form>
          <div className="box">
        <h3 className="heading">Login</h3>
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
      </div>
        </form>
    </>
  );
};

export default Login;
