import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Profile_pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profileimg'/>
      <h1><span>Hi! I am Ananya Sikdar</span>, fullstack developer based in India</h1>
      <p>I am an aspiring Fullstack developer from Kolkata, with deep understanding in Python, ASP.NET MVC, Databases and ReactJS</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <a href='https://github.com/sikdarananya' target='_blank' rel='noopener noreferrer'>
            <i className="fa fa-github">&nbsp;Go to my Github</i>
          </a>
        </div>
      <div className='hero-resume'>
        <a href='google_drive_link_or_local_assets_path' target='_blank' rel='noopener noreferrer'>My resume</a>
      </div>
      </div>
    </div>
  )
}

export default Hero
