import React from "react";
import "../App.css";
import "./design.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export var Design = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let PROJECT_ID = "meytmqps";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "project"]');

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        setProjects([]);
        if (result.length > 0) {
          result.forEach((project) => {
            setProjects((oldArray) => [...oldArray, project]);
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="design">
      <div className="projects">
        {projects.map((project) =>
          project.images ? (
            <Link
              to={"/design/" + project.title.split(" ").join("")}
              key={project.title}
            >
              <div
                className="project-card"
                key={project.title}
                style={{
                  backgroundImage: `url(${project.images[0]}`,
                }}
              >
                <div className="overlay">{project.title}</div>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};
