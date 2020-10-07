import React from "react";
import Styles from "./BlogIndex.module.css";
import Footer from "../components/Footer";
import FirstNavBar from "../components/FirstNavBar";
import MainNavBar from "../components/MainNavBar";
import Header from "../components/BlogIndex/BlogIndexHeader";
import Posts from "../components/BlogIndex/BlogIndexPosts";

const Blog = (props) => {
  const handleNavOpen = () => {
    const links = document.querySelector(".toggle-links");
    links.style.zIndex = "1000";
    const navBar = document.querySelector(".main-navbar ul");
    navBar.style.maringTop = 0;
    const lis = document.querySelectorAll(".main-navbar ul li a");
    for (let a of lis) {
      a.style.color = "#fff";
    }
    navBar.classList.add(Styles.navOpen);
  };
  return (
    <div className={Styles.blog}>
      <MainNavBar
        color="#13699b"
        handleNavOpen={handleNavOpen}
        handleNavClose={() => {}}
        shouldManipulate={true}
      />
      <Header />
      <Posts />

      <Footer />
    </div>
  );
};

export default Blog;
