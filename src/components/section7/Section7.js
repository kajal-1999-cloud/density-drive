import React from 'react'
import "./section7.css";
import PhoneItem from './PhoneItem';
import phone1 from "../../static/phone1.png"
import phone2 from "../../static/phone2.png"
import phone3 from "../../static/phone3.png"
import manager1 from "../../static/manager1.png"
import manager2 from "../../static/manager2.png"
import manager3 from "../../static/manager3.png"

const Section7 = () => {
  return (
    <div className='section-7 flex'>
      <div className='top'>
        <h1>Derivates made simple<br />in <span className='yellow'>3 Easy </span> Steps</h1>
      </div>
      <div className='bottom'>
        <PhoneItem rightImg={manager1} leftImg={phone1} h2='Create an Account' p='Register & Complete your Verification in less than 2 minutes' />
        <PhoneItem rightImg={manager2} leftImg={phone2} h2='Create an Account' p='Add funds quickly using a variety of payment methods' />
        <PhoneItem rightImg={manager3} leftImg={phone3} h2='Create an Account' p='Choose Your Trading Pair & Trade Seamlessly' />
      </div>
    </div>
  )
}

export default Section7