import React from 'react'
import "./section5.css";
import tradegraph from "../../static/tradegraph.png"
const Section5 = () => {
  return (
    <div className='section-5 flex'>
      <div className='top'>
        <h1><span className="yellow">Unlock </span>New Frontiers.</h1>
        <p>Are you a stock trader looking for new opportunities to make <br/> money? We got you covered!</p>
      </div>
      <div className='bottom'>
        <img src={tradegraph} alt='image' />
      </div>
    </div>
  )
}

export default Section5