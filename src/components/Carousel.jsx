import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

import screen4 from '../assests/4.jpg'
import screen5 from '../assests/5.jpg'
import screen6 from '../assests/6.jpg'
import screen7 from '../assests/7.jpg'


import back1 from '../assests/back1.jpg';

const useStyles = makeStyles(theme => ({ 
    img:{
      marginTop: 0,
      height: '100vh',
      display: 'block',
      margin: 'auto',
      width: '95%'
    }
}));

 
export default function MainCarousel(props) {
        const classes = useStyles();
        return (
            <div id="section1" >
            <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
                <div>
                    <img src={screen4} alt="img1"/>
                </div>
                <div>
                    <img src={screen5} alt="img1"/>
                </div>
               
                <div>
                    <img src={screen6} alt="img1"/>
                </div>
                <div>
                    <img src={screen7} alt="img1"/>
                </div>
            </Carousel>

            {/* <img src={back1} alt="img1" className={classes.img} /> */}
            </div>
        );
    }
