import React from 'react'
import "./style.css"
import tradebig from "../../Assets/tradebig.png"
const Part4 = () => {
  return (
    <div className='main-div4 flex'>
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

export default Part4