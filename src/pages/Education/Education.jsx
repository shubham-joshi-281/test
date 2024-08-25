import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { LiaSchoolSolid } from "react-icons/lia";
import Wobble from "react-reveal/Wobble";
import Flip from "react-reveal/Flip";
import "./Education.css";
const Education = () => {
  return (
    <main className="education-wrapper" id="education">
      <section className="page-heading-section">
        <Wobble>
          <span>Education Detail</span>
        </Wobble>
        <Flip left>
          <span>
            👉 Education helps us get exposure to new ideas and concepts that we
            can use to appreciate and improve the world around us and the world
            within us.
          </span>
        </Flip>
      </section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--edu-card) ",
            color: "var(--dark-theme)",
            borderRadius: "2rem",
            border: "2px solid var(--orange)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--orange)",
          }}
          date="2019 - 2015"
          iconStyle={{
            background: "var(--orange)",
            color: "var(--dark-theme)",
          }}
          icon={<MdSchool />}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              padding: ".5rem 1rem",
              color: "#242D49",
            }}
          >
            Bachelor of Engineering in Mechanical
          </h3>
          <h4
            style={{
              fontSize: "2rem",
              padding: ".5rem 1rem 0 1rem",
              color: "darkblue",
            }}
          >
            Dev Bhoomi Institute of Technology, Dehradun, Uttarakhand
          </h4>
          <p
            style={{
              fontSize: "1.9rem",
              padding: "0rem 1rem",
              color: "grey",
            }}
          >
            Bachelor of Engineering in Mechanical from Dev Bhoomi Institute of
            Technology, Dehradun and Score 72%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--edu-card) ",
            color: "var(--dark-theme)",
            borderRadius: "2rem",
            border: "2px solid var(--orange)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--orange)",
          }}
          date="2013 - 2015"
          iconStyle={{
            background: "var(--orange)",
            color: "var(--dark-theme)",
          }}
          icon={<BiSolidSchool />}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              padding: ".5rem 1rem",
              color: "#242D49",
            }}
          >
            Intermediate 12<sup>th</sup> (P. C. M)
          </h3>
          <h4
            style={{
              fontSize: "2rem",
              padding: ".5rem 1rem 0 1rem",
              color: "darkblue",
            }}
          >
            Inspiration Sr. Sec. School, Haldwani, Nainital, Uttarakhand.
          </h4>
          <p
            style={{
              fontSize: "1.9rem",
              padding: "0rem 1rem",
              color: "grey",
            }}
          >
            Intermediate 12<sup>th</sup> (P. C. M) from Inspiration Sr. Sec.
            School, Haldwani, Nainital, Uttarakhand.affiliated from CBSC and
            score 65%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--edu-card) ",
            color: "var(--dark-theme)",
            borderRadius: "2rem",
            border: "2px solid var(--orange)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--orange)",
          }}
          date="2011 - 2013"
          iconStyle={{
            background: "var(--orange)",
            color: "var(--dark-theme)",
          }}
          icon={<LiaSchoolSolid />}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              padding: ".5rem 1rem",
              color: "#242D49",
            }}
          >
            High School 10<sup>th</sup> (P. C. M)
          </h3>
          <h4
            style={{
              fontSize: "2rem",
              padding: ".5rem 1rem 0 1rem",
              color: "darkblue",
            }}
          >
            Jim Corbett School, Haldwani, Nainital, Uttarakhand.
          </h4>
          <p
            style={{
              fontSize: "1.9rem",
              padding: "0rem 1rem",
              color: "grey",
            }}
          >
            High School 10<sup>th</sup> from Jim Corbett School, Haldwani,
            Nainital, Uttarakhan affiliated from CBSC and score 7.8 CGPA.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* Education Card Section Ends */}

      <div
        className="blur"
        style={{
          backgroundColor: "#FCA61F",
          top: "10%",
          left: "100%",
          filter: "blur(19rem)",
          zIndex: 1,
          transform: "translate(-100%,-10%)",
        }}
      ></div>
      <div
        className="blur"
        style={{
          backgroundColor: "yellow",
          top: "80%",
          left: "-0%",
          zIndex: 1,
          filter: "blur(15rem)",
          transform: "translate(0%,-80%)",
        }}
      ></div>
    </main>
  );
};

export default Education;
