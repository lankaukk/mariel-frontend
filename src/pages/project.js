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
      {props.project.video ? (
        <iframe
          src={props.project.video}
          alt="Portfolio Video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="project-description"
        ></iframe>
      ) : (
        console.log(props.project.video)
      )}
      <div className="project-images">
        {props.project.images.map((image) => (
          <img
            src={image}
            key={image}
            alt="project"
            className="new-project-image"
          />
        ))}
      </div>
    </div>
  );
};
