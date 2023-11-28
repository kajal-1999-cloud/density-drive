import React from 'react'
import "./section6.css";
import percent from "../../static/percent.png";
import manage1 from "../../static/Manage1.png"
const Section6 = () => {
  return (
    <div className='section-6 flex'>
      <div className='top'>
        <h1>Start Small. Earn Big.</h1>
        <p>Deposity a minimum of 1000 and get a<br/> Deposit bonus + dedicagted relationship manager</p>
      </div>
      <div className='bottom'>
        <div className='card'>
          <img src={percent} alt='image'/>
        <h1>Deposit <br />Bonus</h1>
        <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
        </div>
        <div className='card'>
          <img src={ manage1} alt='image' />
          <h1>Dedicated<br/>
            Relationship Manager.</h1>
          <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
        </div>
      </div>
    </div>
  )
}

export default Section6