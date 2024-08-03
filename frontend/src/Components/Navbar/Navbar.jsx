import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {



  const[menu,setmenu] = useState("Fome")
  return (
    <div className='Navbar'>
    <img src={assets.logo} alt="" className="logo" />
    <ul className="navbarmenu">
      <li onClick={()=>setmenu("Home")}  className={menu=="Home"?"active":""}><a href="#">Home</a></li>
      <li onClick={()=>setmenu("Menu")} className={menu=="Menu"?"active":""}><a href="#">Menu</a></li>
      <li onClick={()=>setmenu("Mobile-app")} className={menu=="Mobile-app"?"active":""}><a href="#">Mobile-app</a></li>
      <li onClick={()=>setmenu("Contact-us")}  className={menu=="Contact-us"?"active":""}><a href="#">Contact-us</a></li>

    </ul> 
<div className="navbar-right">
  <img src={assets.search_icon} alt="" />
  <div className="search_icon">
    <img src={assets.basket_icon} alt="" />
    <div className="dot"></div>

  </div>
<button>Sign in</button>
  
</div>



    </div>
  )
}

export default Navbar
