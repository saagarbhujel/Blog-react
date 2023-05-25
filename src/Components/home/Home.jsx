import React from "react";
import { Link } from "react-router-dom";
import "../auth/auth.css";

const Home = () => {
  return (
    <>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
      <Link to="/signup">
        <button className="btn" style={{ marginLeft: 10 }}>
          Sign Up
        </button>
      </Link>
    </>
  );
};

export default Home;
