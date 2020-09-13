import React from "react";
import FirstNavBar from "./components/FirstNavBar";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <FirstNavBar />
      <Header />
      <About />
      <Footer />
    </Router>
  );
}

export default App;
