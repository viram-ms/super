import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HUL from '../assests/hul.jpg';
import Amul from '../assests/amul.png';
import Nestle from '../assests/itc.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

// import classes from '*.module.sass';

const styles = theme => ({
  title:{
    display:'flex',
    justifyContent:'center',
    paddingTop:60,
    paddingBottom:60,

  },
  logoWrapper:{
    display:'flex',
    justifyContent:'center'
  },
  logoImg:{
    width:125,
    height:100,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    height: 100,
    }
  },
  carousel:{
    marginBottom: 45
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
      
        <div id="section4">
        <div className={classes.title}>
        <Chip color="primary" label="BRANDS LISTED WITH US" className={classes.chip}></Chip>
        </div>
        <Carousel
        // centerMode={true}
          className={classes.carousel}
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={1}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1800}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
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
          <img src={Nestle} className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
              <img src={Amul} className={classes.logoImg} alt="logo1"/>
          </div>
          <div className={classes.logoWrapper}>
          <img src={HUL} className={classes.logoImg} alt="logo1" />
          </div>
        </Carousel>
        </div>
      
    );
  }
}
export default withStyles(styles)(Logo);