import { Link } from "react-router-dom"

function Nav(){
    return (
        <>
        <div className="nav-container">
            <div className="nav-main">               
                <div className="nav-links sticky-top">
                 <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <Link className="navbar-brand lobster-regular"to="/">
                        <img className="logo-img" src="login_img.jpg" alt="Logo"/> SajiloKinBech 
                        {/* <p className="lobster-regular"> SajiloKinBech</p> */}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Products</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                                                                             
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>

                                                


                </div>
            </div>


        </div>
        
        </>
    )
}

export default Nav
