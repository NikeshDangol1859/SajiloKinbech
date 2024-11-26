import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className="container-login">
    <div className="login-main d-flex">
        <div className="login-img">
            <img src="./login_img.jpg" alt="" />

        </div>

        {/* Login details */}

        <div className="login-form">
        <div className="login-container">
        <div className="login-card">
        <h2>Register</h2>     
           
        </div>
        {/* <div className="circleuser">
            <img className='img' src="user.png" alt="user" />
        </div> */}

        <div className="login-box">            
            <form>
            <label htmlFor="name">First Name:
                </label>
                <input type="text" className="form-control fst-italic" name='Fname' id="Fname" aria-describedby="fnameHelp" placeholder='Enter your First Name' required />
                <label htmlFor="username">Last Name:
                </label>
                <input type="text" className="form-control fst-italic" name='Lname' id="Lname" aria-describedby="LnameHelp" placeholder='Enter your Last Name' required />
                <label htmlFor="username"><i className="fa-solid fa-user" /> Username:
                </label>
                <input type="email" className="form-control fst-italic" name='email' id="email" aria-describedby="emailHelp" placeholder='Enter your User Name' required />

               
                <label htmlFor="password"><i className="fa-solid fa-key" /> Password: 
                </label>
                <input type="password" className="form-control fst-italic" name='password' id="password" aria-describedby="passwordHelp" placeholder='Enter your Password' required  />

                <div className="btn-group d-flex">
                <button className='log_btns'><Link to={`/login`} className='links'>Sign In</Link></button>

                <button className='register_btns'>Register</button>


                </div>
                
            </form>

            {/* <h5 className='m-2'>Have Account Already? <Link to={`/register`}>Register Here</Link></h5> */}
            
        </div>
        
    </div>

        </div>
    </div>
</div>
      
    </>
  )
}

export default Register
