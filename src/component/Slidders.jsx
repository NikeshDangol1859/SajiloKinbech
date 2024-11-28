import React, { useEffect } from 'react'

function Slidders() {
  // useEffect(() => {
  //   const carouselElement = document.querySelector('#carouselExampleAutoplaying');
  //   if (carouselElement) {
  //     new bootstrap.Carousel(carouselElement); // Ensure Bootstrap's JS is loaded
  //   }
  // }, []);
  return (
    <>
    <div className="container-home">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide1.jpg" className="d-block w-100" alt="FirstImage" />
    </div>
    <div className="carousel-item">
      <img src="slide2.jpg" className="d-block w-100" alt="SecondImage" />
    </div>
    <div className="carousel-item">
      <img src="slide3.jpg" className="d-block w-100" alt="ThirdImage" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
      
    </>
  )
}

export default Slidders
