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
import Post from "./pages/BlogPost";
import Form from "./components/Form";
import Sponsors from "./pages/Sponsors";
import FirstNavBar from "./components/FirstNavBar";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ChangePassword from "./components/auth/ChangePassword";
import Partners from "./pages/Partners";
import Partner from "./pages/Partner";
import AddPartner from "./pages/AddPartner";
import Sponsor from "./pages/Sponsor";
import CamparVan from "./pages/CamperVan";

function App() {
  return (
    <Router>
      <FirstNavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stakepool" exact component={StakePool} />
        <Route path="/stakepool/guides" component={Guides} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/posts/:id" component={Post} />
        <Route path="/posts/submit" component={Form} />
        <Route path="/sponsors" exact component={Sponsors} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/partners" exact component={Partners} />
        <Route path="/partners/:name" exact component={Partner} />
        <Route path="/partners/:name/add" component={AddPartner} />
        <Route path="/partners/:name/:parnter" component={Sponsor} />
        <Route path="/campervan" component={CamparVan} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
