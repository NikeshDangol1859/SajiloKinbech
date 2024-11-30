import React from 'react'
import Shopping from '../Shopping'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <Shopping/>
    <div className="container">
    <div className="cart">
    <table className="table table-bordered align-middle">
  <thead className="table-primary text-center">
    <tr>
      <th>Title</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Price per Item</th>
      <th>Remove</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr className='text-center'>
      <td>Lenovo Yoga</td>
      <td><img src="laptop.jpg" alt="Lenovo Yoga" className="img-fluid" style={{width:'80px',height:'80px',objectFit:'cover'}} /></td>
      <td><input type="text" className="form-control" placeholder="Enter quantity" /></td>
      <td>Rs. 120000</td>
      <td><input type="checkbox" /></td>
      <td><button className="btn btn-info btn-sm">Update</button></td>
    </tr>
  </tbody>
</table>
<div className="d-flex justify-contain-around align-items-center mt-4">
  <h4>Total Price: <span className="text-danger">Rs. 120000</span></h4>
  <div>
  <Link to={'/'}> <button className="btn btn-primary" style={{marginLeft:'15px'}}> Continue Shopping </button> </Link>
    <button className="btn btn-warning" style={{marginLeft: '15px'}}>Buy Now</button>
    <button className="btn btn-danger" style={{marginLeft: '15px'}}>Remove</button>
  </div>
</div>


    </div>
    </div>

      
    </>
  )
}

export default Cart
