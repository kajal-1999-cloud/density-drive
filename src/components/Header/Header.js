import React from 'react'
import "./header.css"
import logo from "../../static/logo.png";
const Header = () => {
  return (
    <header id='header'>
      <div className='header'>
        <div className='header-left'>
          <img src={logo} alt="logo" />
        </div>
        <div className='header-right'>
          <a href="/">Career</a>
          <a href="/">Blogs</a>
          <a href="/">Leaderbaard</a>
          <a href="/">Fees</a>
          <button className='gradient-bg'>TRADE NOW</button>
        </div>
      </div>
    </header>
  )
}

export default Header