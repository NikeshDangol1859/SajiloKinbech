import React from 'react'
import Shopping from '../Shopping'

function Contact() {
  return (
    <>
      <Shopping/>
    <div className="Cont">
        
        <div className="Crow">
                {/* sidnav bar (Catagory)*/}
                <ul className="navbar-nav me-auto text-center">
                <li className="nav-item bg-info rounded-end-4">
                    <div className="nav-link text-light"><h2>Contacts</h2></div>
                </li>
                <div className='bg-light'>
                <p className="text-dark mt-3">
                    <i className="fa-solid fa-phone mt-3" /> 9812345678
                    <br />
                    <i className="fa-solid fa-location-dot mt-3" /> Chapagaun,Lalitpur
                    <br />
                    <i className="fa-solid fa-envelope mt-3" /> info@Sajilokinbech.com.np
                </p>
                </div>
                </ul>
        </div>
        
        <div className='img'>
                {/* contats */}     
            {/* <img src="location.png" className="d-block w-100" alt=" "/>          */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3360.9123596128984!2d85.31916608070226!3d27.59774691499643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM1JzUxLjkiTiA4NcKwMTknMjYuNSJF!5e1!3m2!1sen!2snp!4v1732702881601!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
        <div className="col-md-4 "> 
            <div className="info">
                
                    {/* contats */}
                            
                        <p align="justify" className="m-auto">E-commerce has evolved over the past few years and since it’s easier 
                            and more convenient, it is evident that customers are actually switching 
                            to the trend of online shopping. Daraz, the Nepali shopping store, brings 
                            a whole new concept by showcasing a number of famous brands under one 
                            roof. Not only does it fulfill clothing necessities of both men and women 
                            but you can also shop for all kinds of appliances like air conditioners,
                            heaters, refrigerators, LED TVs and a lot more. Simply select your 
                            favorite brand like Samsung, Apple, HP, Huawei, Dell, Canon, Nikon, 
                            etc and get yourself the best electronic items.
                        </p>       
                </div>
            </div>
    </div>
    </>
  )
}

export default Contact
