import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Blogcard from '../Component/Blogcard';
import Productcard from '../Component/Productcard';
import Featured from '../Component/Featured';
import SpecialCard from '../Component/SpecialCard';
import Meta from '../Component/Meta';

const Home = () => {
 
  return (
    <>
    <Meta title={"Mousavi Website For Shopping"} />
           <section className='home-page-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-sm-6'>
              
                <div className='home-banner-left position-relative'>
                  <img src="./images/main-banner.jpg" className='img-fluid rounded-3' alt='banner-home-teaser' />
                      <div className='home-banner-content position-absolute'>
                        <h6 className='text-danger'>SUPERCHARGED FOR PROS.</h6>
                        <h2 className='py-1'>ipad S13+Pro.</h2>
                        <p>From $999.00<br/>
                        for 24 mo.Footnote*</p>
                        <Link className='buy-now-home text-white rounded-5 py-2 px-4'>BUY NOW</Link>
              
                </div>
                  </div>
            </div>
            <div className='col-sm-6'>
            <div className='d-flex flex-wrap gap-10  justify-content-between align-items-center'>
              
               
                 <div className='home-banner-small position-relative'>
                   <img src="./images/catbanner-01.jpg"  className='img-fluid rounded-3' alt='banner-home-teaser' />
                      <div className='home-banner-content-small position-absolute'>
                      <h6 className='text-danger'>BEST SALE</h6>
                      <h4 className='py-1'>Laptops Max</h4>
                      <p>From $169.00 or<br/>
                       64.62/mo</p>
                     
                     </div>
                   </div>
                 
                 
               
                 <div className='home-banner-small position-relative'>
                   <img src="./images/catbanner-02.jpg"  className='img-fluid rounded-3' alt='banner-home-teaser' />
                      <div className='home-banner-content-small position-absolute'>
                      <h6 className='text-danger'>NEW ARRIVAL</h6>
                      <h4 className='py-1'>BUY Ipad Air</h4>
                      <p>From $569.00 or<br/>
                       98.62/mo</p>
                     
                     </div>
                   </div>
                 
              
              
                 <div className='home-banner-small position-relative'>
                   <img src="./images/catbanner-03.jpg"  className='img-fluid rounded-3' alt='banner-home-teaser' />
                      <div className='home-banner-content-small position-absolute'>
                      <h6 className='text-danger'>15% OFF</h6>
                      <h4 className='py-1'>SmartWatch 7</h4>
                      <p>From $309.00 or<br/>
                       84.62/mo</p>
                     
                     </div>
                   </div>
                 
                
              
                 <div className='home-banner-small position-relative'>
                   <img src="./images/catbanner-04.jpg"  className='img-fluid rounded-3' alt='banner-home-teaser' />
                      <div className='home-banner-content-small position-absolute'>
                      <h6 className='text-danger'>FREE ENGRAVING</h6>
                      <h4 className='py-1'>AirPods Max</h4>
                      <p>From $399.00 or<br/>
                       94.62/mo</p>
                     
                    
                   
                  </div>
                </div>
             </div>
             </div>
          </div>
        </div>
              </section>

            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                 <div className='row'>
                   <div className='col-sm-12'>
                    <div className='services d-flex align-items-start justify-content-between px-5'>
                        <div className='d-flex align-items-start gap-10'>
                          <img className='' src='images/service.png' alt='Free Shopping' />
                        <div>
                          <span>
                            <b>Free Shopping</b>
                            </span><br />
                            <p className='fs-10'>From All Orders Over $100.00</p>
                            </div>
                            </div>
                        <div className='d-flex align-items-start gap-10'>
                          <img  src='images/service-02.png' alt='Free Shopping' />
                        <div><span><b>Daily Suprise Offers</b></span><br /><p className='fs-10'>Save Up To 25% Off</p></div></div>
                        <div className='d-flex align-items-start gap-10'>
                          <img  src='images/service-03.png' alt='Free Shopping' />
                        <div><span><b>Support 24/7</b></span><br /><p className='fs-10'>Shop With An Expert</p></div></div>
                        <div className='d-flex align-items-start gap-10'>
                          <img  src='images/service-04.png' alt='Free Shopping' />
                        <div><span><b>Affordable Prices</b></span><br /><p className='fs-10'>Get Factory Direct Price</p></div></div>
                        <div className='d-flex align-items-start gap-10'>
                          <img  src='images/service-05.png' alt='Free Shopping' />
                        <div><span><b>Secure Payment</b></span><br /><p className='fs-10'>100% Protected Peyments</p></div></div>
                        
                      </div>
                   </div>
                 </div>
              </div>
            </section>

            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className=''>
                      <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
                        <div className='d-flex align-items-center gap-30'>
                           <div>
                            <h4>Laptops</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/laptop.jpg' alt='laptop' />
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                        <div>
                            <h4>Camera</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/camera.jpg' alt='camera' />
                        
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                        <div>
                            <h4>Tv</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/tv.jpg' alt='tv' />
                       
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                        <div>
                            <h4>Speaker</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/speaker.jpg' alt='speaker' />
                        
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                           <div>
                            <h4>Laptops</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/laptop.jpg' alt='laptop' />
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                        <div>
                            <h4>Camera</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/camera.jpg' alt='camera' />
                        
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                        <div>
                            <h4>Tv</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/tv.jpg' alt='tv' />
                       
                        </div>
                        <div className='d-flex align-items-center gap-30'>
                        <div>
                            <h4>Speaker</h4>
                            <p>See 1000 Items</p>
                           </div>
                           <img src='images/speaker.jpg' alt='speaker' />
                        
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <h2 className='mb-20'>Special product</h2>
                    <div className='d-flex flex-wrap align-items-center justify-content-between'>
                      <SpecialCard />
                      <SpecialCard />
                      <SpecialCard />
                      <SpecialCard />
                      </div>
                  </div>
                </div> 
              </div>
            </section>

            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                <div className='row d-flex flex-row'>
                 
                      <h2 className='mb-20'>Our Popular Products</h2>
                        <div className='popluar-home-page'>
                        <Link className='text-dark my-2 d-flex flex-row align-items-center'><img src='images/watch.jpg' width="60" alt='watch' />
                          <h6><b>Smart Watch</b></h6></Link>
                          <Link className='text-dark my-2 d-flex flex-row align-items-center'><img src='images/speaker.jpg' width="60" alt='speaker' />
                          <h6><b> Speaker</b></h6></Link>
                          <Link className='text-dark my-2 d-flex flex-row align-items-center'><img src='images/laptop.jpg' width="60" alt='laptop' />
                          <h6><b>labtop</b></h6></Link>
                        </div>
                    

                       <Productcard  />
                       <Productcard  />
                       <Productcard  />
                       <Productcard  />
                   
                </div>
              </div>
            </section> 


            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                <div className='row'>
                  <div className='col-sm-12'>
                  <div className='marque-wrapper'>
                  <Marquee>
                       <img src='images/brand-01.png' className='px-5' alt='brand' />
                       <img src='images/brand-02.png' className='px-5' alt='brand' />
                       <img src='images/brand-03.png' className='px-5' alt='brand' />
                       <img src='images/brand-04.png' className='px-5' alt='brand' />
                       <img src='images/brand-05.png' className='px-5' alt='brand' />
                       <img src='images/brand-06.png' className='px-5' alt='brand' />
                       <img src='images/brand-07.png' className='px-5' alt='brand' />
                       <img src='images/brand-08.png' className='px-5' alt='brand' />
                  </Marquee>
                  </div>
                  
                  </div>
                </div>
              </div>
            </section>

            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                <div className='row'>
                 
                      <h2 className='mb-20'>Featured Collection</h2>
                       <Featured  />
                       <Featured  />
                       <Featured  />
                       <Featured  />
                   
                </div>
              </div>
            </section> 

            <section className='home-page-2 py-5'>
              <div className='container-xxl'>
                <div className='row'>
                 
                      <h2 className='mb-20'>Our Last News</h2>
                       <Blogcard  />
                       <Blogcard  />
                       <Blogcard  />
                       <Blogcard  />
                   
                </div>
              </div>
            </section> 

            
    </>
  )
}

export default Home