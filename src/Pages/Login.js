import React from 'react'
import Meta from '../Component/Meta'
import LinkerInStore from '../Component/LinkerInStore'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Meta title={'Login'} />
    <LinkerInStore title={'Login'} />
    
    <div className='Login py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='d-flex flex-row justify-content-center'>
                        <div className='Login-section p-3 d-flex flex-column  justify-content-center'>
                            <h3 className='text-center'>Login</h3>
                            <input className='login-input' type='mail' placeholder='Email'></input>
                            <input className='login-input' type='password' placeholder='Password'></input>
                            <Link className='pt-2 login-forget'><span className='text-dark'><b>forget Your Password?</b></span></Link>
                            <div className='login-button pt-3 pb-2'>
                            <Link><button className='button-login btn btn-dark px-3 py-1 mx-2' type='submit'>Login</button></Link>
                            <Link to={'./Signup'}><button className='button-login btn btn-warning px-3 py-1 mx-2' type='submit'>Sign Up</button></Link>
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

export default Login