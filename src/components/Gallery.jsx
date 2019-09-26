import React from "react";
import Slider from './Slider';
import pic1 from "../assests/Photoshoot/Bulk/resized (5)/1.jpg";
import pic5 from "../assests/Photoshoot/Bulk/resized (5)/5.jpg";
import pic6 from "../assests/Photoshoot/Bulk/resized (5)/6.jpg";
import pic8 from "../assests/Photoshoot/Bulk/resized (5)/8.jpg";

import pic2c from "../assests/Photoshoot/Freeze/resized (4)/2.jpg";
import pic5c from "../assests/Photoshoot/Freeze/resized (4)/5.jpg";
import pic7c from "../assests/Photoshoot/Freeze/resized (4)/7.jpg";
import pic9c from "../assests/Photoshoot/Freeze/resized (4)/9.jpg";

import pic2d from "../assests/Photoshoot/baby/resized (5)/2.jpg";
import pic3d from "../assests/Photoshoot/baby/resized (5)/3.jpg";
import pic4d from "../assests/Photoshoot/baby/resized (5)/4.jpg";
import pic5d from "../assests/Photoshoot/baby/resized (5)/5.jpg";

import pic1e from "../assests/Photoshoot/snacks/resized (6)/1.jpg";
import pic3e from "../assests/Photoshoot/snacks/resized (6)/3.jpg";
import pic4e from "../assests/Photoshoot/snacks/resized (6)/4.jpg";
import pic5e from "../assests/Photoshoot/snacks/resized (6)/5.jpg";
import pic10e from "../assests/Photoshoot/snacks/resized (6)/10.jpg";
import pic15e from "../assests/Photoshoot/snacks/resized (6)/15.jpg";

import pic2f from "../assests/Photoshoot/kitchen/resized (7)/2.jpg";
import pic9f from "../assests/Photoshoot/kitchen/resized (7)/9.jpg";
import pic10f from "../assests/Photoshoot/kitchen/resized (7)/10.jpg";
import pic14f from "../assests/Photoshoot/kitchen/resized (7)/14.jpg";

import pic5g from "../assests/Photoshoot/house/resized (8)/5.jpg";
import pic6g from "../assests/Photoshoot/house/resized (8)/6.jpg";
import pic11g from "../assests/Photoshoot/house/resized (8)/11.jpg";
import pic15g from "../assests/Photoshoot/house/resized (8)/15.jpg";


import pic3h from "../assests/Photoshoot/hair/resized (9)/3.jpg";
import pic9h from "../assests/Photoshoot/hair/resized (9)/9.jpg";
import pic12h from "../assests/Photoshoot/hair/resized (9)/12.jpg";
import pic14h from "../assests/Photoshoot/hair/resized (9)/14.jpg";
import pic18h from "../assests/Photoshoot/hair/resized (9)/18.jpg";

const photos_1 = [`${pic1}`,`${pic5}`,`${pic6}`,`${pic8}` ];
const photos_3 = [`${pic2c}`,`${pic5c}`,`${pic7c}`,`${pic9c}` ];
const photos_4 = [`${pic2d}`,`${pic3d}`,`${pic4d}`,`${pic5d}` ];
const photos_5 = [`${pic1e}`,`${pic3e}`,`${pic4e}`,`${pic5e}`,`${pic15e}`,`${pic10e}` ];
const photos_6 = [`${pic2f}`,`${pic9f}`,`${pic10f}`,`${pic14f}` ];
const photos_7 = [`${pic5g}`,`${pic6g}`,`${pic11g}`,`${pic15g}` ];
const photos_8 = [`${pic3h}`,`${pic9h}`,`${pic12h}`,`${pic14h}`,`${pic18h}` ];


function GalleryComponent(props) {
  return (
    <div style={{ maxWidth: 1500, margin: "auto", padding: "0px 5px" }}>
        <Slider photos={photos_1} name="SKIN CARE PRODUCTS" props={props} link="personal-care"/>
        <Slider photos={photos_3} name="DAIRY PRODUCTS" props={props} link="dairy"/>
        <Slider photos={photos_4} name="BABY CARE PRODUCTS" props={props} link="personal-care"/>
        <Slider photos={photos_5} name="SNACK AND BEVERAGES" props={props} link="snacks-beverages"/>
        <Slider photos={photos_6} name="GROCERY PRODUCTS" props={props} link="grocery"/>
        <Slider photos={photos_7} name="HOUSE UTILITIES PRODUCTS" props={props} link="house-utilities"/>
        <Slider photos={photos_8} name="HAIR CARE PRODUCTS" props={props} link="personal-care"/>
    </div>
  );
}
export default GalleryComponent;
