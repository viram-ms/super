import React from "react";
import { withStyles } from "@material-ui/core/styles";
import HUL from "../assests/brands/hul.jpg";
import Amul from "../assests/brands/amul.png";
import Nestle from "../assests/brands/itc.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from "@material-ui/core/Typography";
import Colgate from "../assests/brands/colgate2.png";
import CocaCola from "../assests/brands/coca-cola.webp";
import Maybe from "../assests/brands/maybe.webp";
import Pepsico from "../assests/brands/pepsico.webp";
import Dabur from "../assests/brands/dabur2.jpg";
import badshah from "../assests/brands/badshah.png";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import classes from '*.module.sass';

const styles = theme => ({
  title: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 30
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  logoImg: {
    // width:250,
    height: 110,
    [theme.breakpoints.down("sm")]: {
      height: 110
    }
  },
  carousel: {
    marginBottom: 45
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
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Logo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="section4" style={{ maxWidth: 1500, margin: "auto" }}>
        <div style={{ textAlign: "center", marginTop: 60, marginBottom: 20 }}>
          <Typography variant="h5" style={{ marginBottom: 0, fontFamily: 'Signika, sans-serif', fontSize: 28,fontWeight: 600 }}>
            BRANDS LISTED WITH US
          </Typography>

          <hr
            style={{
              height: 3.5,
              backgroundColor: "#f58221",
              border: "none",
              borderRadius: 5,
              width: "200px"
            }}
          />
        </div>
        <Carousel
          // centerMode={true}
          customLeftArrow={<KeyboardArrowRight />}
          customRightArrow={<KeyboardArrowRight />}
          className={classes.carousel}
          swipeable={true}
          draggable={true}
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
          removeArrowOnDeviceType={["mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
        >
          <div className={classes.logoWrapper}>
            <img src={Amul} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={Nestle} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={HUL} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={Colgate} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={CocaCola} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={Maybe} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={Dabur} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={Pepsico} className={classes.logoImg} alt="logo1" />
          </div>
          <div className={classes.logoWrapper}>
            <img src={badshah} className={classes.logoImg} alt="logo1" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default withStyles(styles)(Logo);
