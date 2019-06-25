import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import screen1 from '../assests/super-market-1.jpg'
import screen2 from '../assests/super-market-2.jpg'

 
class MainCarousel extends React.Component {
    render() {
        return (
            <div id="section1">
            <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
                <div>
                    <img src={screen1} alt="img1"/>
                </div>
                <div>
                    <img src={screen2} alt="img1"/>
                </div>
                <div>
                    <img src={screen1} alt="img1"/>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default MainCarousel;