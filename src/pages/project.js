import React from "react";
import "../App.css";
import "./project.css";

export var Project = (props) => {
  return (
    <div className="project">
      <div className="project-info">
        <div className="project-title">{props.project.title}</div>
        <div className="project-description">{props.project.description}</div>
      </div>
      <div className="project-images">
        {props.project.images.map((image) => (
          <div
            className="project-image"
            key={image}
            style={{
              backgroundImage: `url(${image}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
