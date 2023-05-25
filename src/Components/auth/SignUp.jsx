import { useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("")

  const registerUser = async () => {
    try {
     const response = await axios.post(
       "https://gaurav.tunnel.yarsagames.com/auth/signup",
       {
         email: email,
         password: password,
         name: name,
       },
       {
         headers: {
          Accept: "application/json",
           "Content-Type": "application/json",
         },
       }
     );
      setEmail("");
      setPassword("");
      setName("");
      setAuthToken(response.data.accessToken);
      console.log(response.data.accessToken);
    } catch (error) {
      console.log("error=" + error);
    }
  };

  const submitFrom = (e) => {
    e.preventDefault();
    registerUser();
    console.log(name, email, password);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitFrom}>
          <div className="userName">
            <p>Enter Your name</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="email">
            <p>Enter Your email</p>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="current-email"
              required
            />
          </div>
          <div className="password">
            <p>Enter Your password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Password"
              required
            />
          </div>
          <div className="register-from-other-route">
            <Link to="/login">Already have an account? <span>Login</span></Link>
          </div>
          <div className="Btn">
            <button className="btn" >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
