import React from 'react'
import Meta from '../Component/Meta'
import LinkerInStore from '../Component/LinkerInStore'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaAddressBook} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const contact = () => {
  return (
    <>
    <Meta title={"contact"} />
    <LinkerInStore title={"contact"}/>
    <div className='contact-page py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-12'>
            
              <div className='location d-flex flex-row my-5'>
                <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414697.3893918936!2d50.72384157240712!3d35.7059643185185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1692289363464!5m2!1sen!2snl" 
               height="450" 
               style={{border:0}} 
               allowfullscreen="true"
                loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"
                 className='location'>
                    
                 </iframe></div>
              <div className='contact-info d-flex flex-row'>
              
                <div className='form-contact d-flex flex-column justify-content-between p-2'>
                  <h3>Contact</h3>
                  <form className='d-flex flex-column' action=''>
                  <input className='input-content' type='text' placeholder='Name'></input>
                  <input className='input-content' pattern='[A-Za-z]{10000}-@gmail.com' type='email' placeholder='E-mail'></input>
                  <input className='input-content' type='tel' placeholder='Phone Number'></input>
                  <textarea className='input-content'  type='text' id='comment' rows="10" cols="32" placeholder='Comment'></textarea>
                  <input type="submit" className=' rounded-5 input-content-submit'  value="Send" />
                  </form>
                </div>
                <div className='form-contact d-flex flex-column p-2'>
                  <h5>Get In Touch With Us</h5>
                  <span className='py-2'><AiOutlineMail />	&nbsp; E-Mail:mohammadaminmsv27@gmail.com</span>
                  <span className='py-2'><BsFillTelephoneFill /> 	&nbsp;Tel:09050962205</span>
                  <span className='py-2'><FaAddressBook />	&nbsp;Address:tehran</span>
                  <span className='py-2'><AiFillGithub />	&nbsp;Github:mohammadaminmsv</span>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default contact