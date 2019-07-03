import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import MediaCard from '../components/Card';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Search from '../components/Search';

function Landing(props){
    // eslint-disable-next-line no-unused-expressions
    console.log(props);
    return(
        <div>
        <Navbar location={props.location.pathname}/>
        <Carousel 
            id="section1"/>
        <Search />
        <Features  
            id="section2"/>
        <MediaCard 
            id="section3"/>
           
        <Logo
            id="section4"/>
        <Footer 
            id="section5" />
    </div>
    );
}

export default Landing;