import React from 'react'
import './FormPage.css'

export const FormPage = () => {
    return (
        <div className='form-content'>
            <div className='Left'>
                <h1 className='heading1'>We solve digital</h1>
                <h1 className='heading1'> problems with an</h1>
                <h1 className='heading1'>outstanding creative flare</h1>
                <p>We have created a new product that will help </p>
                <p>designers, developers and companies create </p>
                <p>websites for their startups quickly and easily.</p>
            </div>

            <div className='Right'>
                <div><span>SIGN UP</span><span className='ml-6'>LOGIN</span></div>
                <div className='form-control'>
                    <form type="submit" action=''>
                    <input type="text"  id="email" placeholder='Your email'/>
                    <input type="text" id="password" placeholder='Your Password'/>
                    <button className='bg-green-800'>Create an Account</button>
                    <span class="mx-5 text-sm text-gray-500">or</span>
                    <button className='bg-blue-800'>Login via Twitter</button>
                    </form>
                </div>
                </div>
                </div>
            )
}
