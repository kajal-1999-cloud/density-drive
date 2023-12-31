import React from 'react'
import "./style.css"
import mobile from "../../Assets/Mobiles.png"
const Part1 = () => {
  return (
    <div className='main-div1 flex'>
      <div className='top'>
        <h1>It’s time to trade,
        </h1>
        <h1>
          the <span className='gradient-color'>future.</span>
        </h1>
        <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
      </div>
      <div className='middle'>
        <div className='background'> 
        <img src={mobile} alt='mobile-img' />
        </div>
      </div>
      <div className='bottom'>
        <div className='sections'>
          <div className='border-right'>
            <h1>00%</h1>
            <p>Conversion Fee </p>
          </div>
          <div className='border-right'>
            <h1>500 Mn+</h1>
            <p>Lifetime Volume Traded</p>
          </div>
          <div className='border-right'>
            <h1>250+</h1>
            <p>Total Tradable Pairs</p>
          </div>
          <div >
            <h1>15,000+</h1>
            <p>Traders</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part1