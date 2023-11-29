import React from 'react'
import "./phone.css"
const PhoneItem = ({ leftImg,rightImg,h2,p}) => {
  return (
    <div className='item'>
      <div className='left'>
        <img src={leftImg} alt='image' />
      </div>
      <div className='right'>
        <img src={rightImg} alt='image' />
        <h2>{h2} </h2>
        <p>{ p}</p>
        <button className='gradient'>TRADE NOW</button>
      </div>
    </div>
  )
}

export default PhoneItem