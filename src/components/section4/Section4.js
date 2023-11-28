import React from 'react'
import "./section4.css"
import tradebig from "../../static/tradebig.png"
const Section4 = () => {
  return (
    <div className='section-4 flex'>
      <div className='top'>
        <h1>Explore the Markets</h1>
        <h1>like it is your <span className='yellow'>Playground.</span></h1>
        <p>Search for your favorite coins and stay ahead of the market</p>
      </div>
      <div className='bottom'>
        <img src={tradebig} alt='image'/>
      </div>
      <div><button className='gradient-bg'>Explore Markets</button></div>
    </div>
  )
}

export default Section4