import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Photography } from "./pages/Photography.js";
import { Design } from "./pages/design";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/photography" element={<Photography />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
