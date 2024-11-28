import React from 'react'
import { Link } from 'react-router-dom'
import Sajilo from './Sajilo'

function Login() {
  return (
    <>
    <div className="login-container">
        <div className="main-login">
        <div className="rows">
            <div className="login-left">
                <Sajilo/>           

            </div>

            <div className="login-right">
            <div className="login-card">
         <h2>Login User</h2> 
         <hr></hr>
           
         </div>        

         <div className="login-box">            
             <form>
                 <label htmlFor="username"><i className="fa-solid fa-user" /> Username:
                 </label>
                 <input type="email" className="form-control fst-italic" name='email' id="email" aria-describedby="emailHelp" placeholder='Enter your User Name' required />

               
                 <label htmlFor="password"><i className="fa-solid fa-key" /> Password: 
                 </label>
                 <input type="password" className="form-control fst-italic" name='password' id="password" aria-describedby="passwordHelp" placeholder='Enter your Password' required  />

                 <div className="btn-group d-flex">
                 <button className='log_btns' type="submit">Sign In</button>

                 <button className='register_btns'><Link to={`/register`} className='links'>Sign Up</Link></button>


                 </div>
                
            </form>
            
        </div>
        
     
            </div>
        </div>
        </div>
    </div>

      
    </>
  )
}

export default Login

