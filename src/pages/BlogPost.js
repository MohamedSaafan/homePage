import React from "react";
import FirstNavBar from "../components/FirstNavBar";
import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
import Header from "../components/BlogPost/PostHeader.js";
import Styles from "./BlogPost.module.css";
import Details from "../components/BlogPost/PostDetails";

const Post = (props) => {
  return (
    <div>
      <MainNavBar
        backgroundImage="linear-gradient(to right, #8181d5, #67fdec)"
        mainNav={Styles.mainNavBar}
        container={Styles.container}
      />

      <Header />
      <Details />
      <Footer />
    </div>
  );
};
export default Post;
