import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

import back1 from '../assests/Photoshoot/v2.png';



const useStyles = makeStyles(theme => ({ 
    img:{
      marginTop: 0,
      height: '100vh',
      display: 'block',
      margin: 'auto',
      width: '100%',
      objectFit: 'cover'
    },
    heading: {
        position: 'absolute',
        top: 140,
        zIndex: 100,
        textAlign: 'center',
        fontFamily: 'signika,sans-serif',
        fontSize: 48,
        [theme.breakpoints.down('sm')]:{
           top: 180,
           fontSize: 38
        },
    },
    subheading: {
        position: 'absolute',
        top: 220,
        zIndex: 100,
        textAlign: 'center',
        fontFamily: 'signika,sans-serif',
        fontSize: 22,
        fontWeight: 500,
        [theme.breakpoints.down('sm')]:{
            top: 300,
         },
    }
}));

 
export default function MainCarousel(props) {
        const classes = useStyles();
        return (
            <div id="section1" style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{position: 'relative'}}>
                <img src={back1} alt="img1" className={classes.img} />
            </div>
                <h1 className={classes.heading}>WELCOME TO KENORITA SUPERMARKET</h1>
                <h3  className={classes.subheading}>MAKING LIVES EASIER, HEALTHIER AND HAPPIER.</h3>
            </div>
        );
    }
