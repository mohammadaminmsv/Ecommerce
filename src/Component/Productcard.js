import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Productcard = () => {
  return (
    <>
    <div className='baner-popular-news-home  mx-2'>
                       <div className='popular-new-item-home-img  position-relative ' >
                        <img src='images/wish.svg' className='favorite-icon fs-5' alt='wish'/>
                         <img src='images/tab.jpg'  id="img"  className='img-fluid py-2 ' alt='' />
                         <img src='images/tab1.jpg'  id="img1"  className='img-fluid py-2 ' alt='' />
                         <span className='span-featured py-2'>Havels</span>
                         <h6 className='desc py-2' >Honer T17.0 1GB RAM 8GB
                            ROM and...
                         </h6>
                         <ReactStars
                               count={5}
                                  size={24}
                                  value="3"
                                  activeColor="#ffd700"
                                  classNames="mb-20"
                                  edit={false}
                                        />
                         <span>$100.00</span>
                         <div className='icons-banner-popular position-absolute'>
                            <div className='d-flex flex-column'>
                                <Link>
                                <img className='py-1' src='images/view.svg' alt='view' /></Link>
                                <Link>
                                <img className='py-1' src='images/prodcompare.svg' alt='prodcompare' /></Link>
                                <Link>
                                <img className='py-1' src='images/add-cart.svg' alt='add-cart' /></Link>
                            </div>
                         </div>
                         </div>
                         </div>
                         
                       
   </>
  )
}

export default Productcard