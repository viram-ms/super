import React, { useState, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-multi-carousel";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from '@material-ui/core/styles';
import Lightbox from './LightBox';


const useStyles = makeStyles(theme => ({
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
    height: 200,
    width: 325,
    // minWidth: 250,
    marginBottom: 10,
    marginTop: 10,
    boxShadow: "1px 3px 8px #808080",
    borderRadius: 7,
    [theme.breakpoints.down("sm")]: {
      height: 175,
    boxShadow: "0 0 5px #808080",
    }
  },
  carousel: {
    marginBottom: 45
    // maxWidth: 500
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1400, min: 1100 },
    items: 3
  },
  tableSmall: {
    breakpoint: { max: 1100, min: 768 },    
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};


function Slider(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setIndex] = useState(0);

  const modalLightBox = (index) => {
      console.log(index);
      setIsOpen(true);
      setIndex(index);
  }
  const classes = useStyles();
  const {photos,name} = props;
  return (
    <div style={{ maxWidth: 1500, margin: "auto", padding: "0px 20px" }}>
      <div style={{ textAlign: "center", marginTop: 0, marginBottom: 20 }}>
        <Typography variant="h5" style={{ marginBottom: 0, fontFamily: 'Signika, sans-serif', fontSize: 28,fontWeight: 600 }}>
         {name}
        </Typography>
        <hr
          style={{
            height: 3,
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
          autoPlay={props.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={2000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["mobile"]}
          deviceType={props.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
        >

          {photos.map((item,index) => (
            <div className={classes.logoWrapper} >
              <img src={item} className={classes.logoImg} alt="logo1" onClick={modalLightBox.bind(this,index)} />
          </div>
          ))}
          </Carousel>
          <Lightbox
            setIndex={setIndex}
            photoIndex={photoIndex}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            photos={photos}
          />
    </div>
  );
}
export default Slider;
