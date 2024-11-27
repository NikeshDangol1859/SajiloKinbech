import React from 'react'
import { Link } from 'react-router-dom'
import Offer from '../Offer'

function Product() {
  return (
    <>
    
    <div className="container">
    <div className="row">
                
                    
                        
                <div className="col-md-4 d-flex my-3">
                <div className="row">
                <div className="card" style={{ width: '18rem' }}>
                
                    <div>
                        
                        <div className="card-body">
                        <Link to={`/ProductDetails`}>
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
      
    </>
  )
}

export default Product
