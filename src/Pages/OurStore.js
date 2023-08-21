import React, { useState } from 'react'
import LinkerInStore from '../Component/LinkerInStore'
import Meta from '../Component/Meta'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import StoreCard from '../Component/StoreCard';
import {AiOutlineRight} from 'react-icons/ai'

const OurStore = () => {
    const [grid , setgrid] = useState(4)
    
  return (
    <>
        <Meta title={"Our Store"} />
        <LinkerInStore title={"Our Store"}/>
        <div className='OurStore py-5' >
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='d-flex flex-row gap-15'>
                            
                            <div className='sidbar col-sm-3 '>
                                <div className='sidbar-first p-3 rounded-3 d-flex flex-column'>
                                    <h6><b>Shop By Categories</b></h6>
                                    <Link className='text-secondary' to={"/"}>Home</Link>
                                    <Link className='text-secondary' to={"/OurStore"}>Our Store</Link>
                                    <Link className='text-secondary' to={"/"}>Blogs</Link>
                                    <Link className='text-secondary' to={"/Contact"}>Contact</Link>
                                </div>
                                <div className='sidbar-first p-3 rounded-3 d-flex flex-column'>
                                <h6><b>Filter By </b></h6>
                                <span className='pt-3'><b>Availability</b></span>
                                <div className='d-flex py-1 flex-row align-items-center'>
                                <input className='chk' type='checkbox'></input>&nbsp;<span className='text-secondary'>out of stock</span>
                                </div>
                                <div className='d-flex py-1 flex-row align-items-center'>
                                <input className='chk' type='checkbox'></input>&nbsp;<span className='text-secondary'>In Stock</span>
                                </div>
                                <span className='pt-3'><b>Price</b></span>
                                <div className='d-flex py-1 flex-row align-items-center justify-content-between'>
                                    <span className='text-secondary'>$</span><input placeholder='from' className='bg-light col-sm-5' type='text'></input>&nbsp;&nbsp;
                                    <span className='text-secondary'>$</span><input placeholder='to' className='bg-light col-sm-5' type='text'></input>

                                </div>
                                <div className='py-3'>
                                <span className='py-3'><b>color</b></span><br />
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                <span className='color-circle'><button id='circlecolor' className='btn btn-dark  ' type='button'></button></span>
                                </div>
                                <div className='d-flex mb-20 flex-column'>
                                <span className='py-3'><b>size</b></span><br />
                                <div>
                                <input className='chk' type='checkbox'></input>&nbsp;&nbsp;<span className='text-secondary'>S</span>
                                </div>
                                <div>

                                <input className='chk' type='checkbox'></input>&nbsp;&nbsp;<span className='text-secondary'>M</span></div>
                                <div>

                                <input className='chk' type='checkbox'></input>&nbsp;&nbsp;<span className='text-secondary'>L</span></div>
                                <div>

                                <input className='chk' type='checkbox'></input>&nbsp;&nbsp;<span className='text-secondary'>XL</span>
                                </div>
                                <div>

                                <input className='chk' type='checkbox'></input>&nbsp;&nbsp;<span className='text-secondary'>XXL</span></div>


                                </div>
                                </div>
                                <div className='sidbar-first p-3 rounded-3 d-flex flex-column'>
                                <span className='py-3'><b>Product Tag</b></span><br />
                                <div className='d-flex flex-wrap'>
                                    <Link><button className='btn-secondary product-btn  rounded-3' type='button'>Headphone</button></Link>
                                    <Link><button className='btn-secondary product-btn  rounded-3' type='button'>Laptob</button></Link>
                                    <Link><button className='btn-secondary product-btn  rounded-3' type='button'>Mobile</button></Link>
                                    <Link><button className='btn-secondary product-btn  rounded-3' type='button'>Headphone</button></Link>
                                    <Link><button className='btn-secondary product-btn  rounded-3' type='button'>Headphone</button></Link>
                                </div>
                              
                                </div>
                                 <div className='sidbar-first p-3 rounded-3 d-flex flex-column'>
                                <span className='py-3'><b>Random Product</b></span><br />
                                <div className='Product-Tag d-flex flex-column '>
                                    <div className='d-flex flex-row  pb-3'>
                                    <div><img src='images/acc.jpg' alt='headphone' /></div>
                                    <div>AirPod Pro For Kids
                                        Pack Multi Color
                                        <ReactStars
                               count={5}
                                  size={24}
                                  value="3"
                                  activeColor="#ffd700"
                                  classNames=""
                                  edit={false}
                                        />
                         <span>$100.00</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-row pt-2'>
                                    <div><img src='images/acc.jpg' alt='headphone' /></div>
                                    <div>AirPod Pro For Kids
                                        Pack Multi Color
                                        <ReactStars
                               count={5}
                                  size={24}
                                  value="3"
                                  activeColor="#ffd700"
                                  classNames=""
                                  edit={false}
                                        />
                         <span>$100.00</span>
                                    </div>
                                </div>
                                </div>
                                </div>


                            </div>
                            <div className='d-flex flex-column position-relative '>
                            <div className='filter-sort justify-content-between d-flex flex-row mb-3  col-sm-12 p-3 align-items-center rounded-3'>
                                <div className="dropdown d-flex flex-row align-items-center gap-15">
                                <h6>Sort By :</h6>
                                
                                 <button className="btn text-secondary dropdown-toggle" type="button" id="Best-Selling" data-bs-toggle="dropdown" aria-expanded="false">
                                   Best Selling
                                 </button>
                                 <ul className="dropdown-menu">
                                    <li>a</li>
                                    <li>b</li>
                                    <li>fvvf</li>
                                    <li>efverv</li>
                                 </ul>
                                 
                                </div>
                                <div className='show-mode align-items-center d-flex flex-row'><span className="text-secondary">21 ptoduct</span>
                                <img className='sort-img-menu rounded-3' src="images/gr.svg"  onClick={()=>setgrid("12")} alt='sort' />
                                <img className='sort-img-menu rounded-3' src="images/gr2.svg" onClick={()=>setgrid("5")} alt='sort' />
                                <img className='sort-img-menu rounded-3' src="images/gr3.svg" onClick={()=>setgrid("3")} alt='sort' />
                                <img className='sort-img-menu rounded-3' src="images/gr4.svg" onClick={()=>setgrid("2")} alt='sort' />
                                </div>
                            </div>
                            <div className='card-shop-store d-flex flex-wrap align-items-center col-sm-12 '>
                                <StoreCard grid={grid}/>
                               
                               
                            </div>
                            <div className='filter-sort d-flex my-3 rounded-3  align-items-center position-absolute  ' id='last-thing'>
                                <span className='text-secondary rounded-3 m-2 bg-light p-2'>Showing 15 of 20</span>
                                <div className='d-flex circlecolor-last'>
                                <span className='color-circle'><button id='circlecolor-last' className='btn btn-dark  ' type='button'>1</button></span>
                                <span className='color-circle'><button id='circlecolor-last' className='btn btn-dark  ' type='button'>2</button></span>
                                <div className='d-flex align-items-center'>
                                    <Link className='text-black'>
                                <AiOutlineRight />
                                </Link>
                                </div>

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

export default OurStore