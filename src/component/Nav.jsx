import { Link } from "react-router-dom"

function Nav(){
    return (
        <>
        <div className="nav-container sticky-top">
            <div className="nav-main">               
                <div className="nav-links">
                 <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <Link className="navbar-brand lobster-regular" to="/">
                        <img className="logo-img" src="login_img.jpg" alt="Logo"/> SajiloKinBech 
                        {/* <p className="lobster-regular"> SajiloKinBech</p> */}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"> <i className="fa-solid fa-house" /> Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                                                                             
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="*"><i className="fa-solid fa-user" />
</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="*"><i className="fa-solid fa-cart-plus" />
</Link>
                            </li>
                        </ul>

                        </div>
                    </div>
                    </nav>

                                                


                </div>
            </div>
              {/* Sub Nav */}

            <div className="sub-nav-container bg-dark">
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
        </div>


        </div>

      
        
        
        </>
    )
}

export default Nav
