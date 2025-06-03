import React from 'react'
import '../Style/signup.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup-body'>
       
            <h3>SIGN UP</h3>
            <form action="" className='form-signup'>
                <div className='input-signup'><input type="text" placeholder='Names' required /></div>
                <div className='input-signup'><input type="email" placeholder='Email' required/></div>
                <div className='input-signup'><input type="password" placeholder='Password' required/></div>
                <Link to='/Home'>
                  <div className='button-signup'><button type='submit'>Sign Up</button></div>
                </Link>
            </form>
        
    </div>
  )
}

export default SignUp