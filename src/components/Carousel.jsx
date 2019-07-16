import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import screen2 from '../assests/1.jpg'
import screen1 from '../assests/2.jpg'
import screen3 from '../assests/3.jpg'
import screen4 from '../assests/4.jpg'
import screen5 from '../assests/5.jpg'
import screen6 from '../assests/6.jpg'
import screen7 from '../assests/7.jpg'
import screen8 from '../assests/8.jpg'



 
class MainCarousel extends React.Component {
    render() {
        return (
            <div id="section1">
            <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
                <div>
                    <img src={screen5} alt="img1"/>
                </div>
                <div>
                    <img src={screen2} alt="img1"/>
                </div>
                <div>
                    <img src={screen1} alt="img1"/>
                </div>
                <div>
                    <img src={screen4} alt="img1"/>
                </div>
                <div>
                    <img src={screen6} alt="img1"/>
                </div>
                <div>
                    <img src={screen7} alt="img1"/>
                </div>
                <div>
                    <img src={screen8} alt="img1"/>
                </div>
                
            </Carousel>
            </div>
        );
    }
}

export default MainCarousel;