import React from 'react'
import "./style.css";
import percent from "../../Assets/percent.png";
import manage1 from "../../Assets/Manage1.png"
const Part6 = () => {
  return (
    <div className='main-div6 flex'>
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

export default Part6