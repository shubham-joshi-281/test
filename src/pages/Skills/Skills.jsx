import React from "react";
import Wobble from "react-reveal/Wobble";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { skills } from "../../utils/skills.js";
import "./Skills.css";
const Skills = () => {
  return (
    <main className="skill-wrapper" id="skill">
      <section className="page-heading-section">
        <Wobble>
          <span>Technologies Stack</span>
        </Wobble>
        <Flip left>
          <span>
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </span>
        </Flip>
      </section>
      <section className="card-container">
        {skills?.map((item, index) => {
          return (
            <Slide left key={index}>
              <div className="card-box">
                <div className="card-detail">
                  <span>{item.name}</span>
                  <item.icon size={50} className="skill-icon" />
                </div>
              </div>
            </Slide>
          );
        })}
      </section>
      {/* Skills Card Section Ends*/}
      <div
        className="blur"
        style={{
          backgroundColor: "#c1f5ff",
          top: "100%",
          filter: "blur(10rem)",
          left: "-4%",
          transform: "translate(20%,-100%)",
        }}
      ></div>
      <div
        className="blur"
        style={{
          backgroundColor: "#edd0ff",
          top: "-0%",
          left: "100%",
          filter: "blur(10rem)",
          border: "2px solid red",
          transform: "translate(-100%,-0%)",
        }}
      ></div>
    </main>
  );
};

export default Skills;
