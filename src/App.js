import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
//import { Photography } from "./pages/photography";
//import { Design } from "./pages/design";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <Photography/> */}
      {/* <Design /> */}
      <Footer />
    </div>
  );
}

export default App;
