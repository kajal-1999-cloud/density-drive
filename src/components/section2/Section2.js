import React from 'react'
import "./section2.css"
import G1 from "../../static/G1.png"
import G2 from "../../static/G2.png"
import G3 from "../../static/G3.png"
import frame1 from "../../static/frame1.png"
import frame2 from "../../static/frame2.png"
import frame3 from "../../static/frame3.png"
const Section2 = () => {
  return (
    <>
      <div className='section-2 flex'>
        <div className='card'>
          <img className='frame' src={frame1} alt='image' />
          <div className='para1'>
            <img className='logo' src={G1} alt='image' />
            <p>One App.</p>
            <p>Endless</p>
            <p>Possibilities</p>
          </div>
        </div>
        <div className='card'>
          <img className='frame' src={frame2} alt='image' />
          <div className='para2'>
            <img className='logo' src={G2} alt='image' />
            <p>Future of</p>
            <p>Derivative</p>
            <p>Trading.</p>
          </div>
        </div>
        <div className='card'>
          <img className='frame' src={frame3} alt='image' />
          <div className='para3'>
            <img className='logo' src={G3} alt='image' />
            <p>Is now here</p>
            <p>for you</p>
          </div>
        </div>
      </div>
    </>
  )    
}
export default Section2