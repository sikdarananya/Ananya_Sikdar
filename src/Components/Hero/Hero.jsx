import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Profile_pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Hi! I am Ananya Sikdar</span>, fullstack developer based in India</h1>
      <p>I am a Fullstack developer from Kolkata, with deep understanding in Python, ASP.NET MVC, Database and ReactJS</p>
      <div className='hero-action'>
      <div className='hero-connect'>Connect with Me</div>
      <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
