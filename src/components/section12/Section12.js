import React from 'react'
import "./section12.css"
import Card from '../section9/Card'
import p1 from "../../static/lperson1.png"
import p2 from "../../static/lperson2.png"
import p3 from "../../static/lperson3.png"
import logo from "../../static/linkedin.png"
const Section12 = () => {
  return (
    <div className='section-12 flex'>
      <div className='top'>
        <h1>Meet the <span className='yellow'>Visionaries</span><br/> behind Density.</h1>
      </div>
      <div className='bottom flex'>
      <Card
        h3="Aakash Mittal"
        image={p1}
        p1="CEO, Density"
        logo={logo}
      />
      <Card
        h3="Bhupendra Bule"
        p1="CTO, Density"
        image={p2}
        logo={logo}
      />
      <Card
        h3="Deepak Vasman"
        p1="CBO, Density"
        image={p3}
        logo={logo}
        />
      </div>
    </div>
  )
}

export default Section12