import React from 'react'
import Header from "../src/components/Header/Header.js"
import Section1 from "../src/components/section1/Section1.js"
import Section2 from "../src/components/section2/Section2.js";
import Section3 from "../src/components/section3/Section3.js";
import Section4 from "../src/components/section4/Section4.js";
import Section5 from "../src/components/section5/Section5.js";
import Section6 from "../src/components/section6/Section6.js";
import Section7 from "../src/components/section7/Section7.js";
import Section8 from "../src/components/section8/Section8.js";
import Section9 from "../src/components/section9/Section9.js";
import Section10 from "../src/components/section10/Section10.js";
import Section11 from "../src/components/section11/Section11.js";
import Section12 from "../src/components/section12/Section12.js";
import Section13 from "./components/section13/Section13.js";
import Footer from "./components/footer/Footer.js"
const App = () => {
  return (
    <div>
      <Header /><Section1 /><Section2 />
      <Section3 /><Section4 />
      <Section5 /><Section6 />
      <Section7 /><Section8 />
      <Section9 /><Section10 />
      <Section11 /><Section12 />
      <Section13 /><Footer/>
    </div>
  )
}

export default App