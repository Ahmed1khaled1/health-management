import React from 'react'
import Hero from '../components/Hero'
import Sec1 from '../components/Sec1'
import Sec4 from '../components/Sec4'
import TopDoctors from '../components/TopDoctors'
import Sec5 from '../components/Sec5'

const About = () => {
  return (
    <div>
      <Hero titlePage="About Us"/>
      <Sec1/>
      <Sec4/>
      <TopDoctors/>
      <Sec5/>
      
    </div>
  )
}

export default About