/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./footer.css"
import logo from "../../static/footerlogo.png"
import icon1 from "../../static/fb.svg"
import icon2 from "../../static/twitt.svg"
import icon3 from "../../static/linkein.svg"
import icon4 from "../../static/github.svg"
const Footer = () => {
  return (
    <footer className='flex'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <a href='#header'>Blog</a>
        <a href='#header'>Fees</a>
        <a href='#header'>Leaderboard</a>
        <a href='#header'>Careers</a>
        <a href='#header'>Contact Us</a>
        <a href='#header'>Privacy Policy</a>
      </div>
      <div className='desc'>
        <p >Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp <br/>i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
      </div>
      <div className='icons'>
        <img src={icon1} alt='social media' />
        <img src={icon2} alt='social media' />
        <img src={icon3} alt='social media' />
        <img src={icon4} alt='social media' />
      </div>
    </footer>
  )
}

export default Footer