import React from 'react'
import "./section10.css"
import mic from "../../static/mic.png";
import Card1 from './Card1';
import greater from "../../static/greaterlesser.png"
import greaterpeople from "../../static/greaterpeople.png"
import stack from "../../static/stack.png"
const Section10 = () => {
  return (
    <div className='section-10 flex'>
      <div className='top'>
        <div>
          <img src={mic} alt='img'/>
        </div>
        <h1>Earn Money. <span className='yellow'>The Easy Way.</span></h1>
        <p>No Complexity of Trading Fee, generate volume and win</p>
      </div>
      <div className='bottom'>
        <Card1
          image={ greater}
          h3="Share your your referral link"
        />
        <Card1
          image={greaterpeople }
          h3="Invite Friends to Trade on Density"
        />
        <Card1
          image={stack }
          h3="Trade and Earn"
        />
      </div>
      <br/>
      <button className='gradient-bg'>START EARNING NOW</button>
    </div>
  )
}

export default Section10