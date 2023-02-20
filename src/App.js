import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Photography } from "./pages/Photography.js";
import { Design } from "./pages/design";
import { Project } from "./pages/project";
import { Contact } from "./pages/contact";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
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
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/design" element={<Design />}></Route>
          {projects.map((project, i) =>
            project.title ? (
              <Route
                key={project.title}
                path={"/design/" + project.title.split(" ").join("")}
                element={<Project project={project} />}
              ></Route>
            ) : null
          )}
          <Route path="/photography" element={<Photography />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
