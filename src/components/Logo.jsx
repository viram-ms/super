import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HUL from '../assests/hul.jpg';
import Amul from '../assests/amul.png';
import Nestle from '../assests/itc.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Davidoff from '../assests/davidoff.webp'
import CocaCola from '../assests/coca-cola.webp';
import Maybe from '../assests/maybe.webp';
import Pepsico from '../assests/pepsico.webp';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import classes from '*.module.sass';

const styles = theme => ({
  title:{
    display:'flex',
    justifyContent:'center',
    paddingTop:60,
    paddingBottom:30,

  },
  logoWrapper:{
    display:'flex',
    justifyContent:'center'
  },
  logoImg:{
    // width:250,
    height:100,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    height: 100,
    }
  },
  carousel:{
    marginBottom: 45,
    // maxWidth: 500
  },
  chip: {
    fontSize: 18,
    padding: 28,
    marginBottom: 10
  }
});
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


  
 class Logo extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      
        <div id="section4" style={{maxWidth: 1200, margin: 'auto'}}>
        <div style={{textAlign: 'center',marginTop: 60, marginBottom: 20}}>
              <Typography variant="h6" style={{marginBottom: 0}}>BRANDS LISTED WITH US</Typography>
                        
                        <hr style={{ height: 3.5,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '200px'}} />
              </div>
        <Carousel
        // centerMode={true}
          customLeftArrow= {<KeyboardArrowRight />}
          customRightArrow= {<KeyboardArrowRight />}

          className={classes.carousel}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={4}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1800}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[ "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
        >
          <div className={classes.logoWrapper}>
              <img src={Amul} className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
          <img src={Nestle}  className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
              <img src={HUL} className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
          <img src={Davidoff} className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
              <img src={CocaCola} className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
          <img src={Maybe} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
          <img src={Pepsico} className={classes.logoImg} alt="logo1" />
          </div>
        </Carousel>
        </div>
      
    );
  }
}
export default withStyles(styles)(Logo);