import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="title-container">
      <p className="title-text1">{text1}</p>
      <p className="title-text2">{text2}</p>
      <div className="line"></div>
    </div>
  );
};

export default Title;
