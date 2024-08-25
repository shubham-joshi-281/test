import React, { useEffect } from "react";
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Top from "./components/Top/Top";
import { useTheme } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
const App = () => {
  // Theme Context Use
  const [theme] = useTheme();
  useEffect(() => {
    setTimeout(() => {
      return alert("Hope So You Like This Portfolio ");
    }, 10000);
  }, []);
  return (
    <section id={theme}>
      <Layout>
        <Intro />
        <About />
        <Education />
        <Skills />
        <Project />
        <Top />
        <Contact />
      </Layout>
    </section>
  );
};

export default App;
