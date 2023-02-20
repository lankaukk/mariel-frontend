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
        {/* <div
          className="project-main-image"
          style={{
            backgroundImage: `url(${props.project.images[0]}`,
          }}
        /> */}
        <div className="project-other-images">
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
    </div>
  );
};
