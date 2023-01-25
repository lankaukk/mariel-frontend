import React, { useState } from "react";
import "../App.css";

export var Nav = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const NavItem = (props) => {
    return (
      <div className="nav-item" onClick={closeMobileMenu}>
        {props.name}
        {props.children}
      </div>
    );
  };

  return (
    <div className="nav">
      <div className="nav-icon">
        <div
          onClick={handleClick}
          className={click ? "open" : "closed"}
          style={{ fontSize: 60, zIndex: 5000 }}
        >
          +
        </div>
      </div>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <NavItem name="design" />
        <NavItem name="photography" />
        <NavItem name="contact" />
      </div>
    </div>
  );
};
