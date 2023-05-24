import {useState} from 'react'
import "./auth.css"

const SignUp = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleName=(e)=>{
  setName(e.target.value)
}

const handleEmail =(e)=>{
  setEmail(e.target.value)
}

const handlePassword=(e)=>{
  setPassword(e.target.value)
}

const submitFrom=(e)=>{
  e.preventDefault();
  console.log(name,email,password)
}

  return (
    <>
  <form>
  <div className="container">
    <div className="userName">
        <p>Enter Your name</p>
        <input type="text" name="name" id="name" onChange={handleName} value={name}/>
    </div>
    <div className="email">
        <p>Enter Your email</p>
        <input type="email" onChange={handleEmail} value={email} />
    </div>
    <div className="password">
        <p>Enter your password</p>
        <input type="password"  onChange={handlePassword} value={password}/>
    </div>
    <div className="btn">
     <button className='btn' onClick={submitFrom}>Signup</button>
    </div>
   </div>
  </form>
   
    </>
  )
}

export default SignUp