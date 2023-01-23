import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

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
    <div className="photo_container">
      {projects.map((project) => (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};
