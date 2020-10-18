import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {connect} from 'react-redux'
import Home from "./pages/Home";
import StakePool from "./pages/StakePool";
import Guides from "./pages/Guides";
import Blog from "./pages/BlogIndex";
import Post from "./pages/BlogPost";
import AddPost from "./pages/AddPost";
import Sponsors from "./pages/Sponsors";
import FirstNavBar from "./components/FirstNavBar";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ChangePassword from "./components/auth/ChangePassword";
import Partners from "./pages/Partners";
import Partner from "./pages/Partner";
import AddSponsor from "./pages/AddPartner";
import Sponsor from "./pages/Sponsor";
import CamparVan from "./pages/CamperVan";
import AdminPannel from "./pages/AdminPannel";
const App = props =>{
  return (
    <Router>
      <FirstNavBar isAdmin = {props.isAdmin}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stakepool" exact component={StakePool} />
        <Route path="/stakepool/guides" component={Guides} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/posts/:id" component={Post} />
        <Route path="/admin/addpost" >
          <AddPost isAdmin = {props.isAdmin} />
        </Route>
        <Route path="/sponsors" exact component={Sponsors} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/partners" exact component={Partners} />
        <Route path="/partners/:category" exact component={Partner} />
        <Route path="/partners/:category/:sponsor" component={Sponsor} />
        <Route path="/campervan" component={CamparVan} />
        <Route path = '/admin' exact><AdminPannel isAdmin = {props.isAdmin}/></Route>
        <Route path = '/admin/addsponsor'>
          <AddSponsor isAdmin = {props.isAdmin} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
const {isAdmin} = state.auth
  return {
    isAdmin
  }
 
}

export default connect(mapStateToProps)(App);
