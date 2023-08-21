import React from 'react'
import {SiFireship} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {ImAppleinc} from 'react-icons/im'
import {FaGooglePlay} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  let x = new Date().getFullYear()
  
  return (
    <>
      <footer className='footer-up py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='d-flex flex-row align-items-center'>
              <div className='ml-7 col-sm-4'><SiFireship className='mx-2' /><span className=' '>Sign Up For New Products</span></div>
              <div className='col-sm-6'>
                <div class="input-group mb-3">
                 <input type="text" 
                  class="form-control"
                  placeholder="Your Email" 
                  aria-label="Your Email" 
                  aria-describedby="basic-addon2">
                    

                  </input>
                  <span class="input-group-text" 
                       id="basic-addon21">
                      Subscripe
                    </span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </footer>

      <footer className='footer-middle'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='d-flex flex-row align-items-start'>
                  <div className='d-flex flex-column col-sm-3 footer-middle-item'> 
                    <span className='fw-bold my-3'>Contact Us</span> 
                    <span className='mb-2'>Demo Store</span>
                    <span className='mb-2'>Tehran</span>
                    <a href='tel:+98 9165177591 ' className='mb-2 text-white'>+98 916-517-7591</a>
                    <a href='mailto:mohammadaminmsv27@gmail.com' className='mb-2 text-white'>Mohammadaminmsv27@gmail.com</a>
                    <span className='mb-2 d-flex flex-row'>
                    <a href='twitter'><AiFillTwitterCircle className='logo-item-contact text-white'/></a>
                    <a href='telegram'><BsTelegram className='logo-item-contact text-white'/></a>
                    <a href="https://www.instagram.com"><AiFillInstagram className='logo-item-contact text-white'/></a>
                    </span>

                    </div>
                    <div  className='d-flex flex-column  col-sm-2  footer-middle-item'> 
                    <span className='fw-bold my-3'>Information</span> 
                    <span><Link className='mb-2 text-white'>Privacy policy</Link></span>
                    <span><Link className='mb-2 text-white'>Refund policy</Link></span>
                    <span><Link className='mb-2 text-white'>dopping policy</Link></span>
                    <span><Link className='mb-2 text-white'>Terms Of Service</Link></span>
                    <span><Link className='mb-2 text-white'>Blogs</Link></span>
                    
                    </div>

                    <div  className='d-flex flex-column col-sm-2  footer-middle-item'> 
                    <span className='fw-bold my-3'>Account</span> 
                    <span><Link className='mb-2 text-white'>Search</Link></span>
                    <span><Link className='mb-2 text-white'>About Us</Link></span>
                    <span><Link className='mb-2 text-white'>Fag </Link></span>
                    <span><Link className='mb-2 text-white'>Contact </Link></span>
                    <span><Link className='mb-2 text-white'>Size Chart</Link></span>
                    
                    </div>

                    <div  className='d-flex flex-column  col-sm-2  footer-middle-item'> 
                    <span className='fw-bold my-3'>Quick Links</span> 
                    <span><Link className='mb-2 text-white'>Accessories</Link></span>
                    <span><Link className='mb-2 text-white'>Laptops</Link></span>
                    <span><Link className='mb-2 text-white'>Headphones</Link></span>
                    <span><Link className='mb-2 text-white'>Smart watch</Link></span>
                    <span><Link className='mb-2 text-white'>Tablets</Link></span>
                    
                    </div>
                    <div  className='d-flex flex-column col-sm-3    footer-middle-item'> 
                    <span className='fw-bold my-3'>Our App</span> 
                    <span className='mb-2'>Download Our App and Get Extra 15% Discount On Your First Order...!</span>
                    <div className='d-flex flex-row '>
                      <span className='apl-footer-middle'><FaGooglePlay className='icons-apl'/><br/>Get In On <b>Google Play</b></span>
                      <span className='apl-footer-middle '><ImAppleinc className='icons-apl' /><br />Get In On <b>App Store</b></span>
                    </div>
                    
                    
                    </div>

                  
                 
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='footer-bottom py-3' >
        <div className='container-xxl'>
          <div className='row'>
            <div className='d-flex flex-row align-itema-center justify-content-center '>
              <div>&copy; {x} , Mousavi Powered by Amin</div>
              <div></div>
            </div>
          </div>
        </div>

      </footer>
    
    </>
  )
}

export default Footer