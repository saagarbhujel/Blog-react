import { useEffect, useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { SIGN_UP_URL } from "../../constants";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("")

  const registerUser = async () => {
    try {
     const response = await axios.post(
       SIGN_UP_URL,
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
      localStorage.setItem('accessToken' ,response.data.accessToken)
      console.log(response.data.accessToken);
      console.log(response.data)
    } catch (error) {
      console.log("error=" + error);
    }
  };

  // useEffect(()=>{
  //   const storedAccessToken = localStorage.getItem('accessToken')
  //   if(storedAccessToken){
  //     setAuthToken(storedAccessToken)
  //   }
  // },[])

  const submitFrom = (e) => {
    e.preventDefault();
    registerUser();
    console.log(name, email, password);
         console.log("authToken:", authToken);
  };

  return (
    <>
      <form onSubmit={submitFrom}>
        <div className="box">
          <h3 className="heading">Sign Up</h3>
          <div className="userName">
            <p className="head">Enter Your name</p>
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
            <p className="head">Enter Your email</p>
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
            <Link to="/login">
              Already have an account? <span>Login</span>
            </Link>
          </div>
          <div className="Btn">
            <button className="btn">Signup</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
