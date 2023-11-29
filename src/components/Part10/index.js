import React from 'react'
import "./style.css"
import mic from "../../Assets/mic.png";
import Card1 from './Card1.js';
import greater from "../../Assets/greaterlesser.png"
import greaterpeople from "../../Assets/greaterpeople.png"
import stack from "../../Assets/stack.png"
const Part10 = () => {
  return (
    <div className='main-div10 flex'>
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
      <button className='gradient'>START EARNING NOW</button>
    </div>
  )
}

export default Part10