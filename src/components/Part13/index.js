/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./style.css"
import phone from "../../Assets/lastimg.png"
const Part12 = () => {
  return (
    <div className='main-div13 flex'>
      <div className='top'>
        <h1>Get started now.</h1>
      </div>
      <div className='bottom'>
        <img src={phone} alt='image' />
      </div>
      <button className='trade'>Start Trading!</button>
    </div>
  )
}

export default Part12