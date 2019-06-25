import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dairy from '../assests/dairy.jpg';
import Personal from '../assests/personal4.png';
import Grains from '../assests/grains.jpg';
import Cosmetics from '../assests/cosmetics.jpg';
import Beverages from '../assests/beverages.png';
import Dryfruits from '../assests/dry-fruits.jpg';
import HouseUtilities from '../assests/soaps-detergents-2.png';
import Electronic from '../assests/electronics.png';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Carousel from "react-multi-carousel";
import {Link} from 'react-router-dom';

const data = [ 
  {
    id:'personal-care',
    title: 'Personal Care',
    image: 'personal4.png',
    text: 'We cater to the personal care needs of our customers as well.Our range of products include dental products,hair products,sanitary products,shaving aids and skin care products.'
  },
  {
    id:'2',
    title: 'Dairy Products ',
    image: 'dairy.jpg',
    text: 'We have a wide range of dairy products like ice creams, cheese,butter, favoured milk, chocolates.These products are fresh and of premium quality.'
  },
  {
    id:'grocery',
    title: 'Grocery',
    image: 'grains.jpg',
    text: ' We provide the best quality food grains at the most affordable prices.We have all brands of pulses and food grains.We also keep salt, sugar, papad, sauces, spices, oil,ghee.'
  },
  {
    id:'4',
    title: 'Cosmetic Products',
    image: 'cosmetics.jpg',
    text: ' Our wide range of cosmetic products include perfumes, deodorants, kajal, mascara, blushes, nailpaints. All the cosmetic products are branded and of the supreme quality. '
  },
  {
    id:'5',
    title: 'Special Products',
    image: 'dry-fruits.jpg',
    text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    id:'6',
    title: 'House Utilities',
    image: 'soaps-detergents-2.png',
    text: 'Our home essentials include toiletries like air freshener,toilet cleaner,mops, sponges,wipers etc. We have all kinds of detergents,bath soaps, washing soaps,handwashes.'
  },
  {
    id:'7',
    title: 'Electronic Products',
    image: 'electronics.png',
    text: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    id:'8',
    title: 'Snacks & Beverages',
    image: 'beverages.png',
    text: ' Our product range includes snacks and biscuits with soft drinks and energy drinks. Instant food like noodles, soups, pasta, oats and homemade khakhra are available at our store.'
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyles = makeStyles({
  card: {
    // backgroundColor : 'red',
    maxWidth: 300,
    height: 365,
    margin:'auto auto 5px auto',
    // "& hover":{
    //   boxShadow:" 0 0 50px rgba(0, 0, 0, 0.3)",
    // }
  },
  media: {
    marginTop: 10,
    height: 180
  },
  gridItem:{
      marginTop: 30
  },
  title:{
    display:'flex',
    justifyContent:'center',
    paddingTop:60
  },
  chip: {
    fontSize: 18,
    padding: 28,
    marginBottom: 40
  }
  
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
      <div id="section3">
          <div className={classes.title}>
          <Chip color="primary" label="CATEGORIES" className={classes.chip}></Chip>
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
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1800}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
        >
          

            {data.map((item) => 
            <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Link to={`/category/${item.id}`} style={{textDecoration: 'none'}}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={require(`../assests/${item.image}`)}
                        title="Personal Care Products"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title} 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {item.text}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
                </div>
            )}
          </Carousel>
          
   </div>
  );
}
