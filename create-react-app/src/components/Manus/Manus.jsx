import React from 'react';
import './Manus.css';
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";

import { Link } from 'react-scroll';

import aboutImg from '../../assets/image.png';
import {
  FcAbout, FcBiotech, FcBusinessContact, FcHome,
  FcPortraitMode, FcReadingEbook, FcVideoProjector
} from "react-icons/fc";

const Manus = ({ toggle }) => {
  return (
    <>


      {toggle ? (
        <>
        <Zoom>
        <div className="navbar-profile-pic">
            <img src={aboutImg} alt="profile pic" />
          </div>
        </Zoom>
          <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link 
                  to='home'
                  spy={true} 
                  smooth={true}
                  offset={-100} 
                  duration={100}
                    > 
                <FcHome /> Home</Link>
              </div>
              <div className="nav-link">
                <Link 
                  to='about'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}
                  > <FcAbout /> About </Link>
                </div>
              
              <div className="nav-link">
                <Link 
                  to='techstack'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}>
                    <FcBiotech /> Tech Stack
                  </Link>
                </div>

              <div className="nav-link">
               <Link 
                to='projects'
                spy={true} 
                smooth={true}
                offset={-100}
                duration={100}
               >
                <FcVideoProjector /> Projects
               </Link></div>
               <div className="nav-link">
               <Link 
                to='education'
                spy={true} 
                smooth={true}
                offset={-100}
                duration={100}
               >
               <FcReadingEbook /> Education
               </Link>
                </div>

              <div className="nav-link">
                <Link 
                  to='certificates'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}
                  >
                <FcPortraitMode /> Certification
                </Link>
               </div>
              <div className="nav-link">
                <Link
                to='contact'
                spy={true} 
                smooth={true}
                offset={-100}
                duration={100}
                >
                <FcBusinessContact /> Contact
                </Link>
                </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link 
                  to='home'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}>
                  <FcHome  /></Link>
                 </div>
              <div className="nav-link">
                <Link 
                  to='about'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}>
                    <FcAbout  /></Link>
                   </div>
             
              <div className="nav-link">
                <Link 
                  to='techstack'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}> <FcBiotech /></Link>
             </div>

              <div className="nav-link">
                <Link 
                  to='projects'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}> <FcVideoProjector/></Link>
                 </div>
                 <div className="nav-link">
                <Link 
                  to='education'
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  duration={100}>
                    <FcReadingEbook  /></Link>
              </div>
                 <div className="nav-link">
                <Link
                 to='certificates'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}> <FcPortraitMode /></Link>
              </div>
           
              <div className="nav-link">
                <Link
                 to='contact'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}> <FcBusinessContact /></Link>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default Manus;