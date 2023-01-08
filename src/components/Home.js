import React from "react";
import "../App.css";

export var Home = (props) => {
  return (
    <div className="home" style={{ height: "80vh" }}>
      <div className="name">
        Mariel
        <br />
        Quadrino
      </div>
      <div className="occupation">
        <div style={{ fontSize: "52px" }}>New York, NY</div>
        <div style={{ fontSize: "27px" }}>Communication Designer</div>
      </div>
    </div>
  );
};
