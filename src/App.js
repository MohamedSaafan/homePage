import React from "react";
import FirstNavBar from "./components/FirstNavBar";
import MainNavBar from "./components/MainNavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <FirstNavBar />
      <MainNavBar />
    </Router>
  );
}

export default App;
