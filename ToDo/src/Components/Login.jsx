import React from 'react';
import '../Style/login.css';
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return (
    <div className='container'>
      <div className='signup'>
        <div className='content-signin'>
          <h3 >New Here?</h3>
          <p>Then Sign Up and start Scheduling!</p>
        </div>
        <div className='sign-button'>
          <button>Sign Up</button>
        </div>
      </div>
      <div className='login'>
        <h2>SIGN IN</h2>
        <form className='form-login'>
    
        <input type="email" id="email" placeholder='Email' required />
        
        <input  type="password" id="password" placeholder='Password' required />
          <div className='button-login'>
            <button type="submit">Login</button>
          </div>
          <p>Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;