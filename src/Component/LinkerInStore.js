import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LinkerInStore = (props) => {
    
  return (
    <div className='LinkerInStore py-3 '>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='d-flex flex-row align-items-center justify-content-center'>                

                    <nav aria-label="breadcrumb">
                         <ol class="breadcrumb">
                           <NavLink className='text-primary' to="/">Home</NavLink> &nbsp;&nbsp; / &nbsp;&nbsp;
                           <NavLink className='text-primary' to={`#`}>{props.title}</NavLink>
                         </ol>
                    </nav>
  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LinkerInStore