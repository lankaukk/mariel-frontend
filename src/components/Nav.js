import React, { useState } from "react";
import "../App.css";

import { Link, useLocation } from "react-router-dom";

export var Nav = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const location = useLocation();
  const path = location.pathname;

  const NavItem = (props) => {
    return path === props.route ? (
      <div
        className="nav-item"
        onClick={closeMobileMenu}
        style={{ background: "white", color: "black" }}
      >
        {props.name}
      </div>
    ) : (
      <div className="nav-item" onClick={closeMobileMenu}>
        {props.name}
      </div>
    );
  };

  return (
    <div className="nav">
      {path === "/" ? null : (
        <Link to="/" onClick={closeMobileMenu}>
          <div className="name" style={{ fontSize: "1em", zIndex: 5000 }}>
            Mariel Quadrino
          </div>
        </Link>
      )}
      <div className="nav-icon">
        <div
          onClick={handleClick}
          className={click ? "open" : "closed"}
          style={{ fontSize: 60, zIndex: 5000, color: "white" }}
        >
          +
        </div>
      </div>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <Link to="/design">
          <NavItem name="design" route="/design" />
        </Link>
        <Link to="/photography">
          <NavItem name="photography" route="/photography" />
        </Link>
        <Link to="/contact">
          <NavItem name="contact" route="/contact" />
        </Link>
      </div>
    </div>
  );
};
