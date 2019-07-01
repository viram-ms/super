import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import MediaCard from '../components/Card';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Search from '../components/Search';

function Landing(){
    // eslint-disable-next-line no-unused-expressions
    return(
        <div>
        <Navbar/>
        <Carousel 
            id="section1"/>
        <Search />
        <MediaCard 
            id="section3"/>
            <Features  
            id="section2"/>
        <Logo
            id="section4"/>
        <Footer 
            id="section5" />
    </div>
    );
}

export default Landing;