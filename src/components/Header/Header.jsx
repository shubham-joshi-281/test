import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidMoon } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  // Theme Context Global State
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  // Hemburgur Menu State Show / Hide
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  // Sticky Scroll Bar Effect
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="h-wrapper" id={`${sticky ? "sticky" : ""}`}>
        <section className="h-left">
          <div className="h-logo">
            <span>Shubham</span>
          </div>

          <section className="switch_btn" onClick={handleTheme}>
            {theme === "light" ? (
              <BiSolidMoon size={30} color="black" />
            ) : (
              <BsSunFill size={30} color="orange" />
            )}
          </section>
        </section>

        <nav className="h-right">
          <ul className={`h-list ${click === true && "h-list show"}`}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              className="h-li"
              offset={-150}
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              className="h-li"
              offset={-150}
              onClick={handleClick}
            >
              about
            </Link>
            <Link
              to="education"
              spy={true}
              offset={-100}
              smooth={true}
              className="h-li"
              onClick={handleClick}
            >
              education
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={-50}
              className="h-li"
              onClick={handleClick}
            >
              skills
            </Link>
            <Link
              to="project"
              spy={true}
              offset={-150}
              smooth={true}
              className="h-li"
              onClick={handleClick}
            >
              project
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-150}
              smooth={true}
              className="h-li"
              onClick={handleClick}
            >
              Contact
            </Link>
          </ul>
        </nav>
        <section className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} color=" #fca61f" />
          ) : (
            <FaBars size={25} color=" #fca61f" />
          )}
        </section>
      </header>
    </>
  );
};

export default Header;
