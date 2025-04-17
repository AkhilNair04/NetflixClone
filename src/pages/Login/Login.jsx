import React from 'react'
import './Login.css'
import logos from '../../assets/logos.png'
const Login = () => {

  const [signState,setSignState] = React.useState("Sign In")
  return (
    <div className='login'>
      <img src={logos} alt="" className="loginlogo"/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          <input type="email" placeholder='Email' className='login-input' />
          <input type="password" placeholder='Password' className='login-input' />
          {signState=="Sign Up" ? <input type="password" placeholder='Confirm Password' className='login-input'/>:<></>}
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState=="Sign In" ? 
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up</span></p>
          :<p>Already a Member? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>}
        </div>
        </div>
    </div>
  )
}

export default Login
