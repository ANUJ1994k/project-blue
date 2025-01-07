import React from 'react'
import './LandingPage.css'

export const LandingPage = () => {
    return (
        <div className='bg-wrapper'>
            <header className='header'>

                <span className="text-zinc-500">Home</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Blog</span>

            </header>
            <div className='text-white '>
                <h3 className='heading3'>Startup 3 </h3>
                <span><i class="fa-light fa-angle-left"></i></span><h1 className="heading1">Forget About Code </h1><span className=''><i class="fa-regular fa-angle-right"></i></span>
                <div className='paragraph'><p>Startup Framework gives you complete freedom over your creative </p>
                <p> process — you don’t have to think about any technical aspects.</p>
                <p> There are no limits and absolutely no coding. </p></div>
            </div>
            <button className='btn'>Create an Account</button>

        </div>
    )
}
