import React from "react";
import image from "../asset/leashngo.jpg";
import "./Day21.css";

function Day21() {
  return (
    <div>
      <div className="content">
        <img src={image} alt="leashngo" width={400} />
        <div className="title-name">
          <h1>
            <span className="span-text">Lea</span>
            <span className="span-text1">sh &</span>
            <span className="span-text2"> Go</span>
          </h1>
          <p>1.0</p>
        </div>
        <div className="box">
          <div className="rectangle">
            <h2>Get Ready</h2>
          </div>
          <div className="text">
            <h1>21</h1>
            <marquee behavior="" direction="left"><p>Days to Go 🦮 🐈 🐾 </p></marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Day21;
