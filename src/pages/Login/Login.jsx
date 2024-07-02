import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" className='login_logo'/>
      <div className="login_form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form_switch">
          <p>New to Netflix? <span>Sign Up Now</span></p>
          <p>Already have an account? <span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
