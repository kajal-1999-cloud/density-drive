import React from 'react'
import "./style.css"
const Part11 = () => {
  return (
    <>
      <div className='position'>
        <div className='main-div11'></div>
        <div className='bg-image flex'>
          <div className='top'>
            <h1>Trade Together. <span className='yellow'>Thrive Together.</span></h1>
            <p>Join the fun-filled community on our platform.</p>
          </div>
          <div className='bottom'>
            <div>
              <h4>10,000+</h4>
              <p>Traders</p>
            </div>
            <div>
              <h4>100Mn</h4>
              <p>Daily Volume Traded</p>
            </div>
            <div>
              <h4>Daily</h4>
              <p>Trade Analysis</p>
            </div>
            <div>
              <h4>Live</h4>
              <p>Signals</p>
            </div>
          </div>
          <div className='blur-div'></div>
          <button className='gradient'>JOIN COMMUNITY</button>
        </div>
      </div>

    </>
  )
}

export default Part11