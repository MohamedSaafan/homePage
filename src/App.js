import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import StakePool from "./pages/StakePool";
import Guides from "./pages/Guides";
import Blog from "./pages/BlogIndex";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stakepool" exact component={StakePool} />
        <Route path="/stakepool/guides" component={Guides} />
        <Route path="/blog" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
