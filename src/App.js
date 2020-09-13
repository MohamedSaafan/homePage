import React from "react";
import FirstNavBar from "./components/FirstNavBar";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <FirstNavBar />
      <Header />
    </Router>
  );
}

export default App;
