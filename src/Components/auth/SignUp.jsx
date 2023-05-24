import {useState} from 'react'
import "./auth.css"

const SignUp = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  return (
    <>
  <form>
  <div className="container">
    <div className="userName">
        <p>Enter Your name</p>
        <input type="text" name="name" id="name" />
    </div>
    <div className="email">
        <p>Enter Your email</p>
        <input type="email" name="email" id="email" />
    </div>
    <div className="password">
        <p>Enter your password</p>
        <input type="password" name="password" id="pswrd" />
    </div>
    <div className="btn">
     <button>Signup</button>
    </div>
   </div>
  </form>
   
    </>
  )
}

export default SignUp