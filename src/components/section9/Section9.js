import React from 'react'
import "./section9.css";
import Card from './Card';
import person1 from "../../static/person1.png"
import person2 from "../../static/person2.png"
import person3 from "../../static/person3.png"
const Section9 = () => {
  return (
    <div className='section-9 flex'>
      <div className='top'>
        <h1>Don’t take our word for it.</h1>
        <p>Hear it from our expert community of traders who have made <br />insane amounts in a short amount of time</p>
      </div>
      <div className='bottom'>
        <Card
          h3="Prakash Jamatia."
          p="As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations."
          p1="Founder, Tradeshala"
          image={person1}
        />
        <Card
          h3="Shambhavi Nayak."
          p="I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful."
          p1="Commodity Trader"
          image={person2}
        />
        <Card
          h3="Arjun Naik."
          p="I've been using this platform for a few months now and it's been a great experience. I was delighted to months now and it's been see all the major crypto coins listed on Density Exchange."
          p1="Equity Trader"
          image={person3}
        />
      </div>
    </div>
  )
}

export default Section9