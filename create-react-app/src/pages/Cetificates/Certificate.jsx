import React from "react";
import  './Cetificates.css'
import Img1 from '../../assets/web.jpg'
import Img2 from '../../assets/fullStack.jpg'
import Img3 from '../../assets/java.jpg'
import Img4 from '../../assets/js.jpg'
import Img5 from '../../assets/bbdu.jpg'
import Img6 from '../../assets/dsa.jpg'
import Spin from 'react-reveal/Spin';
const Certificate = () => {
  return (
    <>
      <div className="continer certificate " id="certificates">
           <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Certificates</h2>
               <hr />
         <div className="row " id="ads">
            <Spin>
               <div className="col-md-4 mb-2  ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img3}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase">Java(Basic)</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img6}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase"> DSA with java</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img4}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase"> JavaScript</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img2}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase">full Stack development</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card rounded">
                <div className="card-image">
                  
                  <img
                    src={Img1}
                    alt="project2" 
                  />
                </div>
                
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> MERN Stack</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card rounded">
                <div className="card-image">
                 
                  <img
                    src={Img5}
                    alt="project1" 
                  />
                </div>
                
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">certification of participation</h5>
                  </div>
                  <a className="ad-btn" href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="  card-body text-center"><a  className="more" href='https://www.linkedin.com/in/preeti-chauhan-352101256/' >View More 👉🏻</a> 
            
            </div>
           
            </Spin>
        </div>
      </div>
    </>
  );
};

export default Certificate;