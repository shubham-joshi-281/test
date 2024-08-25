import React, { useState } from "react";
import Wobble from "react-reveal/Wobble";
import Flip from "react-reveal/Flip";
import contact from "../../assets/images/contact.avif";
import "./Contact.css";
const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!inputs === " ") {
        alert("📢Please Provide All The Fields");
      } else {
        alert(`📢 Thanks ${inputs.name} For Your FeedBack Stay Tune with us!❤`);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="contact-wrapper" id="contact">
      <section className="page-heading-section">
        <Wobble>
          <span>Contact Us</span>
        </Wobble>
        <Flip left>
          <span>👉Get In Touch ! Feel Free To Contact Us.</span>
        </Flip>
      </section>
      <section className="contact-section">
        <section className="contact-left">
          <img src={contact} alt="contact" />
        </section>
        <section className="contact-right">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input">
              <label>Name : </label>
              <input
                className="in"
                value={inputs.name}
                onChange={inputChangeHandler}
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Please Enter Your Name "
                required
              />
            </div>
            <div className="input">
              <label>email : </label>
              <input
                value={inputs.email}
                className="in"
                onChange={inputChangeHandler}
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Please Enter Your Email "
                required
              />
            </div>
            <div className="input">
              <label>Contact Number : </label>
              <input
                value={inputs.number}
                className="in"
                onChange={inputChangeHandler}
                type="number"
                name="number"
                autoComplete="off"
                placeholder="Please Enter Your Number "
                required
              />
            </div>

            <div className="input">
              <label>Message : </label>
              <input
                className="in"
                value={inputs.message}
                onChange={inputChangeHandler}
                type="text"
                name="message"
                autoComplete="off"
                placeholder="Please Enter Your Message "
                required
              />
            </div>
            <div className="input">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </section>
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

export default Contact;
