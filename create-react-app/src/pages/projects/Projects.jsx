import React from "react";
import "./Projects.css";
import Vdo1 from  '../../assets/ecoApp.mp4'
import Vdo2 from  '../../assets/bookStore.mp4'
import v3 from '../../assets/vdo4.mp4'
import Spin from 'react-reveal/Spin';
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <div className="row" id="ads">
         <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack </span>
                  
                     <video src={Vdo1} autoPlay loop muted />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">mongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      E-commerce Website
                    </h6>
                    <p>March 2024</p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Preeti980/Ecommerce-app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React Basic</span>
                  <video src={Vdo2} autoPlay loop muted />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Firebase</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                      BookStore App
                    </h6>
                    <p>january 2024</p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Preeti980/bookStoreApp"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <video src={v3} autoPlay loop muted />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Amazon-Clone</h5>
                    <p>September 2023</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/Preeti980/Amazon-clon">
                    View
                  </a>
                </div>
              </div>
              
            </div>
            <div className="  card-body text-center"><a  className="more" href='https://github.com/Preeti980' >View More 👉🏻</a> </div>
            </Spin>
            

        </div>
      </div>
    </>
  );
};

export default Projects;