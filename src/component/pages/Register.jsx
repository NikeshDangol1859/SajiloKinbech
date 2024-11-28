import React from 'react'
import { Link } from 'react-router-dom'
import Sajilo from './Sajilo'

function Register() {
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
         <h2>Register New User</h2>  <hr></hr>   
           
         </div>        

         <div className="login-box">            
         <form>
            <label htmlFor="name"><i className="fa-solid fa-user" />Full Name:
                </label>
                <input type="text" className="form-control fst-italic" name='Fname' id="Fname" aria-describedby="fnameHelp" placeholder='Enter your First Name' required />
                <label htmlFor="username"><i className="fa-solid fa-envelope" /> Email:
                </label>
                <input type="email" className="form-control fst-italic" name='email' id="email" aria-describedby="emailHelp" placeholder='Enter your User Name' required />
                <label htmlFor="password"><i className="fa-solid fa-key" /> Password: 
                </label>
                <input type="password" className="form-control fst-italic" name='password' id="password" aria-describedby="passwordHelp" placeholder='Enter your Password' required  />
                <label htmlFor="password"><i className="fa-solid fa-location-dot" /> Address: 
                </label>
                <input type="text" className="form-control fst-italic" name='address' id="address" aria-describedby="addressHelp" placeholder='Enter your Password' required  />

                <div className="btn-group d-flex">
                <button className='log_btns'><Link to={`/login`} className='links'>Sign In</Link></button>

                <button className='register_btns'>Register</button>


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

export default Register
