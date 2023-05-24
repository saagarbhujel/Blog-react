// import React from 'react'
import "./auth.css"

const Login = () => {

  
  return (
   <>
   <div className="container">
    <h3 className="heading">Login</h3>
    <div className="email">
       
        <input type="email" name="email" id="email" placeholder="Enter your email"/>
    </div>
    <div className="password">
        
        <input type="password" name="password" id="" placeholder="Enter your password"/>
    </div>
    <div className="btn">
     <button>Login</button>
    </div>
   </div>
   </>

  )
}

export default Login