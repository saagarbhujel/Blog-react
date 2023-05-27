import React from 'react'
import "./navbar.css"
import "../../utils.css"
import { Link } from 'react-router-dom'
import img from '../../img/logo-no-background.png'




const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navLeft">
          <div className="logo">
            <Link to="/">
             <img src={img} alt="" />
            </Link>
          </div>
          <ul className="nav-items">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="navRight">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn" style={{ marginLeft: 10 }}>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
      <hr style={{maxWidth:"70vw", margin:"auto"}}/>
    </>
  );
}

export default NavBar