import React from 'react'
import '../Style/signup.css'

function SignUp() {
  return (
    <div className='signup-body'>
       
            <h3>SIGN UP</h3>
            <form action="" className='form-signup'>
                <div className='input-signup'><input type="text" placeholder='Names' required /></div>
                <div className='input-signup'><input type="email" placeholder='Email' required/></div>
                <div className='input-signup'><input type="password" placeholder='Password' required/></div>
                <div className='button-signup'><button type='submit'>Sign Up</button></div>
            </form>
        
    </div>
  )
}

export default SignUp