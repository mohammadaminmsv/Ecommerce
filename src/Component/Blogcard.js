import React from 'react'
import '../App.css'

const Blogcard = () => {
    let x = new Date().getFullYear()
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let M = month[d.getMonth()]; 
    let z = new Date().getDate();
  return (
    <>
     <div className='baner-news-home col-sm-3'>
                        <div className='banner-new-item-home-img ' >
                          <img src='images/blog-1.jpg' className='img-fluid ' alt='' />
                          <div className='banner-new-item-home'>
                          <span className='date'>{z} {M},{x}</span>
                          <h4>A Beautiful Sunday Morning</h4>
                          <span className='span-banner-home-new desc'>dfrjienrivdvsvdv
                          dvsdvsdvsdvvsdfqefwf</span>
                          <button className='button-blogcard bg-dark text-white rounded-5 py-2 my-3 px-4'>Read More</button>
                          </div>
                          </div>
                          </div>
                          
                        
    </>
  )
}

export default Blogcard