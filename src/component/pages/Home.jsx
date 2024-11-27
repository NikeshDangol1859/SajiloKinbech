import React from 'react'
import { Link } from 'react-router-dom'
import Offer from '../Offer'
import Slidders from '../Slidders'

function Home() {
  return (
    <>
    <div className="container-home">
    <div className="main-home">
    <Slidders/>
    </div>

    <div className="home-sides">
      <div className="row">
        <div className="col-md-3">
          <Offer/>
        
        </div>
        <div className="col-md-9">
          <div className="home-side-right">
            <div className="right-text">
            <div className="right-head">
            <h2>Our Products</h2>
            </div>
            <div className="row">
                
                    
                        
                        <div className="col-md-4 d-flex my-3">
                        <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div>
                                
                                <div className="card-body">
                                <Link to={`ProductDetails`}>
                                <img style={{width:"100%",height:"100%"}} src="laptop.jpg" className="card-img-top" alt="Laptop" />                                
                                    <p><b className='fs-2 text-center'> Dell Laptop </b></p>
                                    <p>Description: Laptop</p>
                                    <p>Price: <b>Rs.</b> 12,0000</p>
                                    </Link>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-warning m-1"> Add To Cart</button>
                                    </div>
                                    

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
          </div>
        </div>
      </div>


    </div>


    </div>
      
   
      
    </>
  )
}

export default Home
