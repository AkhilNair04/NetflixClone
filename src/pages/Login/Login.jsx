import React from 'react'
import './Login.css'
import logos from '../../assets/logos.png'
const Login = () => {
  return (
    <div className='login'>
      <img src={logos} alt="" className="loginlogo"/>
      <div className="login-form">
        <h1>Sign In</h1>
        <form >
          <input type="email" placeholder='Email' className='login-input' />
          <input type="password" placeholder='Password' className='login-input' />
          <button>Sign In</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Login
