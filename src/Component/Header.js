import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {LiaSearchSolid} from 'react-icons/lia'
import {FaCodeCompare} from 'react-icons/fa6'
import {MdFavorite} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillBasket3Fill} from 'react-icons/bs'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import Layout from './Layout'

const Header = () => {
  return (
    <>
      <header className='header-up'>
         <div className='container-xxl d-flex flex-row'>
          <div className='col-sm-1'><img src='#' alt='LOGO'></img></div>
          <div className='col-sm-7 ' ><p className='mb-0'>biggest iranian shop</p></div>
          <div className='col-sm-4 '><p className='text-end mb-0'>PhoneNumber: <a href="tel:+98 9050962205">+98 9050962205 </a>
          | 
           <select>
            <option>English</option>
            <option>Persion</option>
            </select>
            </p>
            </div>
         </div>
      </header>
    

      <header className='header-down'>
        <div className='container-xxl '>
          <div className='row align-items-start '>
            <div className='col-sm-2'><Link className='text-white Namesite'>Mousavi</Link></div>
            <div className='col-sm-5'>
              <div className="input-group mb-1 pt-1">
                <input
                 type="text" 
                 className="form-control" 
                 placeholder="Search product here..." 
                 aria-label="Search product here..." 
                 aria-describedby="basic-addon2"></input>
                   <span 
                   className="input-group-text bg-primary larger" 
                   id="basic-addon2">
                    <LiaSearchSolid className='fs-3' />
                    </span>
               </div>
            </div>
            <div id='test'  className='col-sm-5 d-flex flex-row justify-content-around py-1 align-items-start'>
              <div className='align-middle'>
                <NavLink to="./Compare-Product" className='d-flex flex-row align-items-center gap-2'>
                <FaCodeCompare className='fs-3 element-header ' alt="Compare"/>
                <p className=' text-light mb-0'>Compare <br />Products</p>
                </NavLink>
              </div>
              <div>
                <Link className='d-flex flex-row align-items-center gap-2'>
                <MdFavorite className='fs-3 element-header'/>
                <p className=' text-light mb-0'>Favorite <br />Products</p>
                </Link>
              </div>
              <div>
                <Link to={'./Login'} className='d-flex flex-row align-items-center gap-2'>
                <BsFillPersonFill className='fs-3 element-header'/>
                <p className=' text-light mb-0 '>Log in <br /> My Account</p>
                </Link>
              </div>
              <div>
                <Link className='d-flex flex-row align-items-center gap-2'>
                <BsFillBasket3Fill className='fs-3 text-warning'/>
                <p className=' text-light mb-0'> 5000 $</p>
                </Link>
              </div> 
            </div>
          </div>
        </div>
      </header>
      
      <header className='header-bottom'>
       <div className='container-xxl'> 
          <div className='row col-12'>
               <div className='col-sm-2 d-flex  align-items-center menu-item '>
                        <div className="dropdown">
                            <button className="btn border-0 gap-15 d-flex align-items-center  text-white dropdown-toggle" type="button" id="shop-Categories" data-bs-toggle="dropdown" aria-expanded="false">
                              <BsGrid3X3GapFill />shop Categories
                            </button>
                            <ul className="dropdown-menu">
                                   <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                                   <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                                   <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                           </ul>
                        </div>
                 
                </div>
                <div className='col-sm-6 list-item '>
                 <div className='d-flex flex-row align-items-center gap-4'>
                  <NavLink className="text-white " to="/">Home</NavLink>
                  <NavLink className="text-white" to="/OurStore">Oue Store</NavLink>
                  <NavLink className="text-white" to="/Blogs">Blogs</NavLink>
                  <NavLink className="text-white" to="/Contact">Contact</NavLink>
                  </div> 
                </div>
            </div>
          </div>

      </header>

    </>
  )
}

export default Header