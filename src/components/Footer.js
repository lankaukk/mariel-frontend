import React from "react";
import "../App.css";

export var Footer = (props) => {
  return (
    <div className="footer">
      <div>Mariel Quadrino © {new Date().getFullYear()}</div>
    </div>
  );
};
