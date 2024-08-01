import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white",  }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title">B.Tech</h4>
            <p className="vertical-timeline-element-subtitle">Computer Science and Engineering</p>
            <h6 className="vertical-timeline-element-subtitle">
              Babu Banarsi Das University, Lucknow, UP
            </h6>
            <p className="vertical-timeline-element-subtitle">SGPA: 9+</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white"}}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018-2019 "
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title">Intermediate</h4>
            <p className="vertical-timeline-element-subtitle">
              Swami Vivekanand Inter College GopalPur Madhaiya, Lambhua , Sultanpur, UP
            </p>
            <p className="vertical-timeline-element-subtitle">Percentage: 74%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016-2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title">High School</h4>
            <p className="vertical-timeline-element-subtitle">
            Swami Vivekanand Inter College GopalPur Madhaiya, Lambhua , Sultanpur, UP
            </p>
            <p className="vertical-timeline-element-subtitle">Percentage: 86.6%</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
       
      </div>
    </>
  );
};

export default Education;