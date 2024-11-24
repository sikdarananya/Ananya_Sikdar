import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Profile_pic.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an aspiring full-stack developer with expertise in Python, SQL, ReactJS, and ASP.NET MVC. My passion for coding drives me to explore both front-end and back-end technologies, with a keen interest in artificial intelligence and prompt engineering.</p>
                <p>I aim to create seamless, user-friendly applications by combining innovative design with robust functionality.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>ASP.NET MVC</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Artifitial Intelligence</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Prompt Engineering</p><hr style={{width:"75%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3</h1>
            <p>months of Training done with LTIMindtree</p>
        </div>
        {/* <hr /> */}
        <div className="about-achievement">
            <h1>3+</h1>
            <p>months of Training done with Cognizant Technology Solutions</p>
        </div>
        {/* <hr /> */}
        <div className="about-achievement">
            <h1>PAT at Cognizant</h1>
            <p>Actively involved with Agile360 a GENAI based project</p>
        </div>  
      </div>
    </div>
  )
}

export default About
