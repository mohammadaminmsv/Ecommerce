import React from 'react'
import Meta from '../Component/Meta'
import LinkerInStore from '../Component/LinkerInStore'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <Meta title={"Sign up"} />
    <LinkerInStore title={"Sign up"} />

    <div className='Login py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-sm-12'>
                <div className='d-flex flex-row justify-content-center'>
                    
                    <div className='Login-section p-3 d-flex flex-column  justify-content-center'>
                        <h4 className='text-center'>Create Account</h4>
                        <input className='login-input' type='text' placeholder='your Name'></input>
                        <input className='login-input' type='text' placeholder='Your Last Name'></input>
                        <input className='login-input' type='mail' placeholder='Email'></input>
                        <input className='login-input' type='Password' placeholder='Password'></input>
                        <Link><button className='button-login btn btn-dark  my-3  mx-2' type='submit'>Create</button></Link>


                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup