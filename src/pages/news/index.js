import React from 'react';
import MainNavBar from '../../components/MainNavBar';
import Header from '../../components/news/header';
import MainPosts from '../../components/news/mainposts';
import SideBar from '../../components/news/sidebar';
import Styles from './news.module.css';
import Footer from '../../components/Footer';

const News = props => {
    return (
        <>
        <MainNavBar color = '#1C6F9F' />
         <section className = {`${Styles.news} container`}>
            <Header />
            <SideBar />
            <MainPosts />
            
        </section>
        <Footer />
        </>
       
        
    )
}
export default News;