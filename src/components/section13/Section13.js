/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./section13.css"
import phone from "../../static/lastimg.png"
const Section13 = () => {
  return (
    <div className='section-13 flex'>
      <div className='top'>
        <h1>Get started now.</h1>
      </div>
      <div className='bottom'>
        <img src={phone} alt='image' />
      </div>
      <button className='start-trade'>Start Trading!</button>
    </div>
  )
}

export default Section13