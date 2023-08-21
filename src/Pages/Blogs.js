import React from 'react'
import Meta from '../Component/Meta'
import LinkerInStore from '../Component/LinkerInStore'
import { Link } from 'react-router-dom'

const Blogs = () => {
    let x = new Date().getFullYear()
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let M = month[d.getMonth()]; 
    let z = new Date().getDate();
  return (
   <>
   <Meta title={"Blogs"} />
   <LinkerInStore title={"Blogs"} />
    <div className='blogs-page  py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-sm-12'>
                     <div className='d-flex flex-row gap-15'>
                         <div className='blog-sidbar d-flex flex-column p-3 rounded-3'>
                                         <h6><b>Find By Categories</b></h6>
                                         <li className='text-secondary m-2'>Laptop</li>
                                         <li className='text-secondary m-2'>Watch</li>
                                         <li className='text-secondary m-2'>TV</li>
                                         <li className='text-secondary m-2'>Camera</li>
                         </div>
                         <div className='d-flex flex-wrap'>
                            <div className='blog-page-card m-2 rounded-3'>
                                 <img src='images/blog-1.jpg' alt='blog-pic' className='img-blog-page img-fluid '/>
                                 <div className='p-2'>
                                 <p className='date text-secondary p-2  gap-15'>{z} {M},{x}</p>
                                 <h4 className='pb-3'>A Beautiful Sunday Morning</h4>
                                 <p className='pb-3 desc'>you are only az good az your last collection  dfsdvs dvsdvsdvsdv sdvsdvs</p>
                                 <Link to={'#'}><button className='btn btn-dark px-3 py-2 rounded-5 mx-3'> Read More </button></Link>
                                 </div>
                            </div>
                            <div className='blog-page-card m-2 rounded-3'>
                                 <img src='images/blog-1.jpg' alt='blog-pic' className='img-blog-page img-fluid '/>
                                 <div className='p-2'>
                                 <p className='date text-secondary p-2  gap-15'>{z} {M},{x}</p>
                                 <h4 className='pb-3'>A Beautiful Sunday Morning</h4>
                                 <p className='pb-3 desc'>you are only az good az your last collection  dfsdvs dvsdvsdvsdv sdvsdvs</p>
                                 <Link to={'#'}><button className='btn btn-dark px-3 py-2 rounded-5 mx-3'> Read More </button></Link>
                                 </div>
                            </div><div className='blog-page-card m-2 rounded-3'>
                                 <img src='images/blog-1.jpg' alt='blog-pic' className='img-blog-page img-fluid '/>
                                 <div className='p-2'>
                                 <p className='date text-secondary p-2  gap-15'>{z} {M},{x}</p>
                                 <h4 className='pb-3'>A Beautiful Sunday Morning</h4>
                                 <p className='pb-3 desc'>you are only az good az your last collection  dfsdvs dvsdvsdvsdv sdvsdvs</p>
                                 <Link to={'#'}><button className='btn btn-dark px-3 py-2 rounded-5 mx-3'> Read More </button></Link>
                                 </div>
                            </div><div className='blog-page-card m-2 rounded-3'>
                                 <img src='images/blog-1.jpg' alt='blog-pic' className='img-blog-page img-fluid '/>
                                 <div className='p-2'>
                                 <p className='date text-secondary p-2  gap-15'>{z} {M},{x}</p>
                                 <h4 className='pb-3'>A Beautiful Sunday Morning</h4>
                                 <p className='pb-3 desc'>you are only az good az your last collection  dfsdvs dvsdvsdvsdv sdvsdvs</p>
                                 <Link to={'#'}><button className='btn btn-dark px-3 py-2 rounded-5 mx-3'> Read More </button></Link>
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

export default Blogs