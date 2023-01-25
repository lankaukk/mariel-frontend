import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export var Footer = (props) => {
  return (
    <div className="footer">
      <Link to="/">
        <div>Mariel Quadrino © {new Date().getFullYear()}</div>
      </Link>
    </div>
  );
};
