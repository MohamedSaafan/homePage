import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import StakePool from "./pages/StakePool";

function App() {
  return (
    <Router>
      <Route path="homePage/" exact component={Home} />
      <Route path="homePage/blogindex" component={BlogIndex} />
      <Route path="homePage/stakepool" component={StakePool} />
    </Router>
  );
}

export default App;
