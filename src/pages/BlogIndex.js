import React from "react";
import Styles from "./BlogIndex.module.css";
import Footer from "../components/Footer";
import FirstNavBar from "../components/FirstNavBar";
import MainNavBar from "../components/MainNavBar";
import Header from "../components/BlogIndex/BlogIndexHeader";
import Posts from "../components/BlogIndex/BlogIndexPosts";

const Blog = (props) => {
  return (
    <div className={Styles.blog}>
      <FirstNavBar />
      <MainNavBar
        color="#13699b"
        handleNavOpen={() => {}}
        handleNavClose={() => {}}
      />
      <Header />
      <Posts />

      <Footer />
    </div>
  );
};

export default Blog;
