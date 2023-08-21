import React from 'react'
import '../App.css'
import ReactStars from "react-rating-stars-component";

const SpecialCard = () => {
  return (
    <>
    <div className='special-card mx-10  col-sm-3'>
        <div className='special-card-child py-2 px-2 d-flex flex-row'>
        <div className='d-flex flex-column'>
            
            <div className='py-3'>
                <img src='images/wish.svg' className='favorite-icon fs-5' alt='heart'/>
                <img src='images/speaker.jpg' className='img-center-special img-fluied rounded'  alt='speaker' />
                </div>
            <div className='d-flex flex-row'>
            <img src='images/speaker.jpg' className='img-special-small rounded-3' alt='speaker' />
            <img src='images/speaker.jpg' className='img-special-small rounded-3' alt='speaker' />
            </div>
                        </div>
        <div className='explane-special d-flex flex-column '>
                <span className='py-1'><b className='text-danger'>Havells</b></span>
                <p className='py-1 desc'>Beoplay A1 Portable Blutetooth
                 Speaker with ...</p>
                 <ReactStars
                               count={5}
                                  size={24}
                                  value="3"
                                  activeColor="#ffd700"
                                  classNames="mb-20"
                                  edit={false}
                                        />
                                        <div className='d-flex flex-row'>
                         <span className='price-special text-danger mx-2'>$100.00</span><span className='text-dark'>$100.00</span>
                         </div>

                         <span className='py-1'>Product :</span>
                         <div className='progress-bar py-2 rounded-5 bg-light' style={{height:".6rem"}} >
                         <div className='progress-bar-child '><span>50</span> </div>
                          </div>

                         <button className='buy-now-home  text-white rounded-5 my-2 mb-20 py-2 px-4'>OPTION</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default SpecialCard