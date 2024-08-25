import React from "react";
import { Progress } from "antd";
import RubberBand from "react-reveal/RubberBand";
import Slide from "react-reveal/Slide";
import "./About.css";
const About = () => {
  return (
    <main className="about-wrapper" id="about">
      {/* Left Section Starts */}
      <Slide left>
        <section className="about-left">
          <RubberBand>
            <span>About Me!</span>
          </RubberBand>
          <span>
            Hello World 👋 My name is shubham joshi I'm a Front End Developer
            from uttarakhand India and my portfolio is a representation of all
            my technical skills and my project breif discription that I've
            learned . I describe myself as a passionate , Dedicated and highly
            motivated front end developer with a passion for creating user
            friendly websites and web application. Seeking an opportunity to
            level up my technical skills and creativity in an environment that
            encourages professional growth and learning. I am an enthusiastic,
            self-motivated, reliable, responsible and hard working person. i am
            having skills in Front End technologies like HTML, CSS, JavaScript,
            Bootstrap, ReactJs, Redux, as well as in Back End technologies like
            Node js, express js, as well as in database management like MongoDB,
            and i also have skills in version control like Git/Github.
          </span>
        </section>
      </Slide>

      {/* Left Section Ends */}

      {/* Right Section Starts */}
      <Slide right>
        <section className="about-right ">
          <div className="progress">
            <span>HTML</span>
            <span>
              <RubberBand>
                <Progress type="dashboard" strokeColor="red" percent="90" />
              </RubberBand>
            </span>
          </div>
          <div className="progress ">
            <span>CSS</span>
            <span>
              <Progress type="dashboard" strokeColor="yellow" percent="85" />
            </span>
          </div>

          <div className="progress ">
            <span className="progress-title">JavaScript</span>
            <Progress type="dashboard" strokeColor="blue" percent="70" />
          </div>
          <div className="progress ">
            <span className="progress-title">ReactJs</span>
            <Progress type="dashboard" strokeColor="orange" percent="70" />
          </div>
          <div className="progress ">
            <span className="progress-title">MaterialUI</span>
            <Progress type="dashboard" strokeColor="lightgreen" percent="70" />
          </div>
          <div className="progress ">
            <span className="progress-title">NodeJs</span>
            <Progress type="dashboard" strokeColor="lightblue" percent="60" />
          </div>
          <div className="progress ">
            <span className="progress-title">ExpressJs</span>
            <Progress type="dashboard" strokeColor="hotpink" percent="60" />
          </div>
          <div className="progress ">
            <span className="progress-title">MongoDb</span>
            <Progress type="dashboard" strokeColor="darkviolet" percent="60" />
          </div>
          <div className="progress ">
            <span className="progress-title">VsCode</span>
            <Progress type="dashboard" strokeColor="lightred" percent="80" />
          </div>
          <div className="progress ">
            <span className="progress-title">Bootstrap</span>
            <Progress type="dashboard" strokeColor="green" percent="70" />
          </div>
          <div
            className="blur"
            style={{
              backgroundColor: "#edd0ff",
              top: "100%",
              left: "-0%",
              filter: "blur(10rem)",
              transform: "translate(0%,-100%)",
            }}
          ></div>
          <div
            className="blur"
            style={{
              backgroundColor: "#b2f991",
              top: "0%",
              left: "100%",
              filter: "blur(14rem)",
              transform: "translate(-100%,-0%)",
            }}
          ></div>
        </section>
      </Slide>
      {/* Right Section Ends */}
    </main>
  );
};

export default About;
