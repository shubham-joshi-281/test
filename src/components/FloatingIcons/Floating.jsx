import React from "react";
import "./floating.css";
const Floating = ({ text1, text2, img }) => {
  return (
    <div className="floating">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default Floating;
