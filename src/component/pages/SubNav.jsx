import React from 'react'
import { Link } from 'react-router-dom'

function SubNav() {
    const barStyle = {
        backgroundColor: "#3A8ECC",
        color: "white",
        padding: "10px 0",
        textAlign: "center",
      };
    
      const linkStyle = {
        color: "white",
        marginRight: "20px",
        textDecoration: "none",
      };
    
      const hoverStyle = {
        textDecoration: "underline",
      };
  return (
    <>
    <div style={barStyle}>
      {/* Category links */}
      <Link to="#" style={linkStyle} onMouseOver={(e) => (e.target.style.textDecoration = "underline")} onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
        Electronics
      </Link>
      <Link to="#" style={linkStyle} onMouseOver={(e) => (e.target.style.textDecoration = "underline")} onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
        Clothing
      </Link>
      <Link to="#" style={linkStyle} onMouseOver={(e) => (e.target.style.textDecoration = "underline")} onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
        Accessories
      </Link>
      <Link to="#" style={linkStyle} onMouseOver={(e) => (e.target.style.textDecoration = "underline")} onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
        Kitchen Products
      </Link>
    </div>
    {/* <div className="sub-nav-container">
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
            <div className="sub-nav" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly">
                <li className="nav-item"> 
                    <Link className="nav-link text-light" to={`*`}>Electronics</Link>
                </li>
                <li className="nav-item"> 
                    <Link className="nav-link text-light" to={`*`}>Clothing</Link>
                </li>
                <li className="nav-item"> 
                    <Link className="nav-link text-light" to={`*`}>Accessories</Link>
                </li>
                <li className="nav-item"> 
                    <Link className="nav-link text-light" to={`*`}>Kitchen Products</Link>
                </li>
               </ul>

            </div>
            </div>
        </nav>
        </div> */}
      
    </>
  )
}

export default SubNav
