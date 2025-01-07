import React from 'react'
import './FooterPage.css';
import { FaGooglePlusG, FaFacebook, FaTwitter } from "react-icons/fa";

export const FooterPage = () => {
  return (
    <div className='footer-container'>
        <div className='footer-section1'>
      <div>
        <h1>Startup 3</h1>
      </div>
      <div className='icons'>
<span>Privacy Policy</span>
<span>Terms </span>
<span><FaTwitter/></span>
<span><FaGooglePlusG/></span>
<span><FaFacebook/></span>
      </div>
    </div> 
  <hr></hr>
     <div className="footer-section2">
     <div>
      <span>Tour</span>
      <span>Features</span>
      <span>Pricing Plans</span>
      <span>Our Works</span>
      <span>Brands</span>
      <span>Contacts</span>
          </div>
          <div><p>© 2017 Designmodo. All rights reserved.</p></div>
     </div>
    </div>
  )
}
