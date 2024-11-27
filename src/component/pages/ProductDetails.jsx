import React from 'react'
import Offer from '../Offer'
import Shopping from '../Shopping'
import { Link } from 'react-router-dom'

function ProductDetails() {
  return (
    <>
    <Shopping/>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-3">
                <Offer/>


            </div>
            <div className="col-md-9">
            {/* <h1 className='text-center'>Product Details</h1> */}
    
    <div className="container">        
            <div className="container">
                <div className="row">
                <div className="col-md-5">
                {/* <img className='card-img-top' src={product.image} alt="" /> */}
                <img style={{width:"100%",height:"auto"}} src="laptop.jpg" className="card-img-top" alt="Laptop" />
                
                </div>
                <div className="col-md-7">
                    <h2 className='text-center text-primary fs-1 fw-bolder'>Laptop </h2>
                    <h2>Description: </h2> <p className='text-justify'> Try something new </p>
                    <h2>RS. 120000 </h2>
                    <div>
                                            <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                            <button type="button" className="btn btn-success text-light m-1"><Link className='text-light' to={'/'}>Continue Shopping</Link> </button>
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

export default ProductDetails
