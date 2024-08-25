import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Floating from "../../components/FloatingIcons/Floating";
import profile1 from "../../assets/images/profile1.png";
import instagram from "../../assets/img/instagram.png";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import crown from "../../assets/img/crown.png";
import thumbup from "../../assets/img/thumbup.png";
import glassemoji from "../../assets/img/glassemoji.png";
import "./Intro.css";

const Intro = () => {
  return (
    <main className="intro">
      <div className="banner"></div>
      <section className="intro-wrapper" id="home">
        <section className="intro-left">
          <div className="intro-left-text">
            <span>
              Hi! <span style={{ color: "orange" }}>👋</span> I Am
            </span>
            <span>Shubham Joshi</span>
            <span>
              Frontend Developer with a level of Experience in web designing.
            </span>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Front-End-Developer!",
                    "React-Developer!",
                    "MERN Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div>
            <button className="button btn">Resume</button>
          </div>
          <div className="intro-icons">
            <Link to="https://www.instagram.com">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="https://www.facebook.com/">
              <img src={github} alt="github" />
            </Link>
            <Link to="https://github.com/">
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </section>
        <section className="intro-right">
          <img src={Vector1} alt=""></img>
          <img src={Vector2} alt=""></img>
          <img src={profile1} alt="myPhoto" />
          <div className="float-1">
            <Floating text1={"web"} text2={"developer"} img={crown} />
          </div>
          <div className="float-2">
            <Floating text1={"Good"} text2={"Learner"} img={thumbup} />
          </div>
          <img className="emoji" src={glassemoji} alt="glass emoji" />
          <div
            className="blur"
            style={{
              backgroundColor: "#edd0ff",
              top: "0%",
              left: "100%",
              transform: "translate(-100%,-0%)",
            }}
          ></div>
          <div
            className="blur"
            style={{
              backgroundColor: "#c1f5ff",
              top: "100%",
              left: "-20%",
              transform: "translate(20%,-100%)",
            }}
          ></div>
        </section>
      </section>
    </main>
  );
};

export default Intro;
