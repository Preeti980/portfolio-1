import React from 'react'
import './About.css'
import Img from '../../assets/portfolio-2.jpg'
import Jump from "react-reveal/Jump";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id='about'>
         <div className="row">
             <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Img} alt="profile1_pic" />
             </div>
             <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h2>About me</h2>
              
                <p>
                Hey there! I'm Priti Chauhan, a B.Tech student at Babu Banarasi Das University in Lucknow, UP. Currently, I'm in my final year, specializing in Computer Science and Engineering (CSE).
                   <br/><br/>
                   Passionate front-end developer with a keen eye for design and a commitment to creating seamless, user-friendly experiences. My passion lies in the ever-evolving world of technology, with a special focus on FullStack Development, Data Structures and Algorithms, and exploring various new domains.
                </p>
                <div>
                <h6>
                       
                        <a href='https://www.linkedin.com/in/preeti-chauhan-352101256/'>
                          <BsLinkedin color='blue' size={30} className='ms-2' />
                        </a>
                        <a href='https://github.com/Preeti980'>
                          <BsGithub color='black' size={30} className='ms-2' />
                        </a>
                        <a href='https://telegram.org/dl'>
                          <FaTelegram color='#229ED9' size={30} className='ms-2' />
                        </a>
                      </h6>
                </div>
             </div>
          </div>
      </div>
   </Jump>
    </>
  )
}

export default About