import React from 'react'
import "./style.css";
import PhoneItem from './Phone';
import phone1 from "../../Assets/phone1.png"
import phone2 from "../../Assets/phone2.png"
import phone3 from "../../Assets/phone3.png"
import manager1 from "../../Assets/manager1.png"
import manager2 from "../../Assets/manager2.png"
import manager3 from "../../Assets/manager3.png"

const Part7 = () => {
  return (
    <div className='main-div7 flex'>
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

export default Part7