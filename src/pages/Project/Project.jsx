import React, { useState } from "react";
import { Link } from "react-router-dom";
import { project } from "../../utils/project.js";
import { FaLocationArrow } from "react-icons/fa";
import Wobble from "react-reveal/Wobble";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import "./project.css";
const Project = () => {
  const [data, setData] = useState(project);
  const handleFilter = (cat) => {
    const updateData = project.filter((ele) => {
      return ele.category === cat;
    });
    setData(updateData);
    console.log(updateData);
  };

  return (
    <main className="project-wrapper" id="project">
      <section className="page-heading-section">
        <Wobble>
          <span>Projects Detail</span>
        </Wobble>
        <Flip left>
          <span>
            👉 Education helps us get exposure to new ideas and concepts that we
            can use to appreciate and improve the world around us and the world
            within us.
          </span>
        </Flip>
      </section>
      <section className="filter-btn">
        <button
          className="button"
          onClick={() => {
            setData(project);
          }}
        >
          All Projects
        </button>
        <button className="button" onClick={() => handleFilter("frontend")}>
          FrontEnd
        </button>
        <button className="button" onClick={() => handleFilter("js")}>
          JavaScript
        </button>
        <button className="button" onClick={() => handleFilter("react")}>
          ReactJs
        </button>
        <button className="button" onClick={() => handleFilter("mern")}>
          Mern
        </button>
      </section>

      <section className="project-card">
        {data?.map((item, index) => {
          return (
            <Slide left key={index}>
              <div key={index} className="project-card-detail">
                <img src={item.img} alt="ecomProject" />
                <h2>{item.title}</h2>
                <p>{item.description.substring(0, 80)}</p>
                <div className="tech">
                  <button className="button">
                    <Link to={item.plive}>Live</Link>
                    <FaLocationArrow color="#212121" />
                  </button>
                  <button className="button">
                    <Link to={item.pcode}>Code</Link>
                    <FaLocationArrow color="#212121" />
                  </button>
                </div>
              </div>
            </Slide>
          );
        })}
      </section>
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
export default Project;
