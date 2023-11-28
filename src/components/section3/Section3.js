import React from 'react'
import "./section3.css";
import trade1 from "../../static/trade1.png"
import trade2 from "../../static/trade2.png"
import trade3 from "../../static/trade3.png"

const Section3 = () => {
  return (
    <div className='section-3 flex'>
      <div className='top'>
        <h1>Trade More. <span className='yellow'>Pay Less.</span></h1>
        <p>Our low Fees Supercharge Your Profits</p>
      </div>
      <div className='bottom'>
        <div>
          <img src={trade1} alt='image'/>
        </div>
        <div>
          <img className='image-2' src={trade2} alt='image' />
        </div>
        <div>
          <img src={trade3} alt='image' />
        </div>
      </div>
    </div>
  )
}

export default Section3