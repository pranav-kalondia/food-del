import React from 'react'
import './Last.css'
import { assets } from '../../assets/assets'
const Last = () => {
  return (
    <div className="last"> 
    <div className="footer">
        <div className="footercomponent">
<div className="footer-component-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi et aut! Ullam at praesentium voluptatibus quas porro nihil sed a quasi placeat, quibusdam, cumque, officia corrupti. Totam, maiores voluptatem.</p>
<div className="social-icon">
    <img src={assets.linkedin_icon} alt="" />
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
</div>
</div>

<div className="footer-component-center">
    <h2>COMPANY</h2>
    <ul>
        <li>Home</li>
        <li>About-us</li>
        <li>Delhivery</li>
        <li>Privacy policy</li>
    </ul>
</div>


<div className="footer-component-right">
    <h2>Get in touch</h2>
    <ul>
        <li>Phone: +91 1234567890</li>
        <li>Email: info@tomato.com</li>
    </ul>
</div>

        </div>
        <hr/>
        <p className="footer-copyright"> Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
      
    </div>
  
  )
}

export default Last