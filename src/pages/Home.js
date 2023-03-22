import React from "react";
import "../App.css";
import "./home.css";

export var Home = (props) => {
  return (
    <div className="home" style={{ height: "80vh" }}>
      <div className="home-image"></div>
      <div className="name">Mariel Quadrino</div>
      {/* <div className="subtitle">
        <div className="location">New York, NY</div>
        <div className="occupation">Communication Designer</div>
      </div> */}
    </div>
  );
};
