import React, { useState, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-multi-carousel";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from '@material-ui/core/styles';
import Lightbox from './LightBox';

import pic1 from "../assests/Photoshoot/Bulk/resized (2)/1.jpg";
import pic2 from "../assests/Photoshoot/Bulk/resized (2)/2.jpg";
import pic3 from "../assests/Photoshoot/Bulk/resized (2)/3.jpg";
import pic4 from "../assests/Photoshoot/Bulk/resized (2)/4.jpg";
import pic5 from "../assests/Photoshoot/Bulk/resized (2)/5.jpg";
import pic6 from "../assests/Photoshoot/Bulk/resized (2)/6.jpg";
import pic7 from "../assests/Photoshoot/Bulk/resized (2)/7.jpg";
import pic8 from "../assests/Photoshoot/Bulk/resized (2)/8.jpg";
import pic9 from "../assests/Photoshoot/Bulk/resized (2)/9.jpg";
import pic10 from "../assests/Photoshoot/Bulk/resized (2)/10.jpg";

import pic1b from "../assests/Photoshoot/body-care/resized (3)/1.jpg";
import pic2b from "../assests/Photoshoot/body-care/resized (3)/2.jpg";
import pic3b from "../assests/Photoshoot/body-care/resized (3)/3.jpg";
import pic4b from "../assests/Photoshoot/body-care/resized (3)/4.jpg";
import pic5b from "../assests/Photoshoot/body-care/resized (3)/5.jpg";
import pic6b from "../assests/Photoshoot/body-care/resized (3)/6.jpg";
import pic7b from "../assests/Photoshoot/body-care/resized (3)/7.jpg";
import pic8b from "../assests/Photoshoot/body-care/resized (3)/8.jpg";
import pic9b from "../assests/Photoshoot/body-care/resized (3)/9.jpg";
import pic10b from "../assests/Photoshoot/body-care/resized (3)/10.jpg";
import pic11b from "../assests/Photoshoot/body-care/resized (3)/11.jpg";
import pic12b from "../assests/Photoshoot/body-care/resized (3)/12.jpg";
import pic13b from "../assests/Photoshoot/body-care/resized (3)/13.jpg";
import pic14b from "../assests/Photoshoot/body-care/resized (3)/14.jpg";
import pic15b from "../assests/Photoshoot/body-care/resized (3)/15.jpg";
import pic16b from "../assests/Photoshoot/body-care/resized (3)/16.jpg";
import pic17b from "../assests/Photoshoot/body-care/resized (3)/17.jpg";

import pic1c from "../assests/Photoshoot/Freeze/resized (4)/1.jpg";
import pic2c from "../assests/Photoshoot/Freeze/resized (4)/2.jpg";
import pic3c from "../assests/Photoshoot/Freeze/resized (4)/3.jpg";
import pic4c from "../assests/Photoshoot/Freeze/resized (4)/4.jpg";
import pic5c from "../assests/Photoshoot/Freeze/resized (4)/5.jpg";
import pic6c from "../assests/Photoshoot/Freeze/resized (4)/6.jpg";
import pic7c from "../assests/Photoshoot/Freeze/resized (4)/7.jpg";
import pic8c from "../assests/Photoshoot/Freeze/resized (4)/8.jpg";
import pic9c from "../assests/Photoshoot/Freeze/resized (4)/9.jpg";
import pic10c from "../assests/Photoshoot/Freeze/resized (4)/10.jpg";
import pic11c from "../assests/Photoshoot/Freeze/resized (4)/11.jpg";
import pic12c from "../assests/Photoshoot/Freeze/resized (4)/12.jpg";
import pic13c from "../assests/Photoshoot/Freeze/resized (4)/13.jpg";



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
    height: 220,
    maxWidth: 350,
    minWidth: 300,
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
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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

const photos = [`${pic1}`,`${pic2}`,`${pic3}`,`${pic4}`,`${pic5}`,`${pic6}`,`${pic7}`,`${pic8}`,`${pic9}`,`${pic10}` ];
const photos_2 = [`${pic1b}`,`${pic2b}`,`${pic3b}`,`${pic4b}`,`${pic5b}`,`${pic6b}`,`${pic7b}`,`${pic8b}`,`${pic9b}`,`${pic10b}`,`${pic11b}`,`${pic12b}`,`${pic13b}`,`${pic14b}`, `${pic15b}`,`${pic16b}`,`${pic17b}` ];
const photos_3 = [`${pic1c}`,`${pic2c}`,`${pic3c}`,`${pic4c}`,`${pic5c}`,`${pic6c}`,`${pic7c}`,`${pic8c}`,`${pic9c}`,`${pic10c}`,`${pic11c}`,`${pic12c}`,`${pic13c}` ];


function GalleryComponent(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setIndex] = useState(0);

  const modalLightBox = (index) => {
      console.log(index);
      setIsOpen(true);
      setIndex(index);
  }
  const classes = useStyles();
  return (
    <div style={{ maxWidth: 1500, margin: "auto", padding: "0px 20px" }}>
      <div style={{ textAlign: "center", marginTop: 30, marginBottom: 20 }}>
        <Typography variant="h5" style={{ marginBottom: 0, fontFamily: 'Signika, sans-serif', fontSize: 28,fontWeight: 600 }}>
          TOILETRIES PRODUCTS
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

      <div style={{ textAlign: "center", marginTop: 30, marginBottom: 20 }}>
        <Typography variant="h5" style={{ marginBottom: 0, fontFamily: 'Signika, sans-serif', fontSize: 28,fontWeight: 600 }}>
          FOOD PRODUCTS
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
          {photos_2.map((item,index) => (
            <div className={classes.logoWrapper} >
              <img src={item} className={classes.logoImg} alt="logo1" onClick={modalLightBox.bind(this,index)} />
          </div>
          ))}
          </Carousel>


          <div style={{ textAlign: "center", marginTop: 30, marginBottom: 20 }}>
        <Typography variant="h5" style={{ marginBottom: 0, fontFamily: 'Signika, sans-serif', fontSize: 28,fontWeight: 600 }}>
          DAIRY PRODUCTS
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
          removeArrowOnDeviceType={["mobile"]}
          deviceType={props.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
        >
         {photos_3.map((item,index) => (
            <div className={classes.logoWrapper} >
              <img src={item} className={classes.logoImg} alt="logo1" onClick={modalLightBox.bind(this,index)} />
          </div>
          ))}
        
          </Carousel>
    </div>
  );
}
export default GalleryComponent;
