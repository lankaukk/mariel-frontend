import React from "react";
import "../App.css";

export var Nav = (props) => {
  return (
    <div className="nav">
      <NavItem name='design'/>
      <NavItem name='photography'/>
      <NavItem name='about'/>
      <NavItem name='contact'/>
    </div>
  );
};

var NavItem = (props) => {
  return (
    <div className="nav-item">{props.name}</div>
  )
}
