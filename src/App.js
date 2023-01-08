import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Photos } from "./components/Photos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
