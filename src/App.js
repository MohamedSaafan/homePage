import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import StakePool from "./pages/StakePool";
import Guides from "./pages/Guides";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blogindex" component={BlogIndex} />
        <Route path="/stakepool" exact component={StakePool} />
        <Route path="/stakepool/guides" component={Guides} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
