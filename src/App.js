import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Photos } from "./components/Photos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
