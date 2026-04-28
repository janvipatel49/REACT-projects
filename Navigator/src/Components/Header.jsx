import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='header'>
        <div className="logo">
          <h1>GLOWING</h1>
        </div>
        <div className="nav-links">
            <Link to='/' >HOME</Link>
            <Link to='/Shop' >SHOP</Link>
            <Link to='/Aboutus' >ABOUT US</Link>
            <Link to='/Contactus' >CONTACT US</Link>
            <Link to='/Blog' >BLOG</Link>
        </div>
        <div className="btns">
          <button onClick={()=>navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Header