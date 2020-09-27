import React, { useEffect } from "react";

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
import Post from "./pages/BlogPost";
import Form from "./components/Form";
import Sponsors from "./pages/Sponsors";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stakepool" exact component={StakePool} />
        <Route path="/stakepool/guides" component={Guides} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/posts/:id" component={Post} />
        <Route path="/posts/submit" component={Form} />
        <Route path="/sponsors" component={Sponsors} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
