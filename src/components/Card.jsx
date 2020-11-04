import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Carousel from "react-multi-carousel";
import {Link} from 'react-router-dom';

const data = [ 
  {
    id:'personal-care',
    title: 'Personal Care',
    image: 'personal4.png',
    text: 'We cater to the personal care needs of our customers as well. Our range of products include dental products, hair products, sanitary products, shaving aids and skin care products.'
  },
  {
    id:'dairy',
    title: 'Dairy Products ',
    image: 'dairy.jpg',
    text: 'We have a wide range of dairy products like ice creams, cheese, butter, favoured milk, chocolates.These products are fresh and of premium quality.'
  },
  {
    id:'grocery',
    title: 'Grocery',
    image: 'grains.jpg',
    text: ' We provide the best quality food grains at the most affordable prices. We have all brands of pulses and food grains. We also keep salt, sugar, papad, sauces, spices, oil, ghee.'
  },
  {
    id:'cosmetic',
    title: 'Cosmetic Products',
    image: 'cosmetics.jpg',
    text: ' Our wide range of cosmetic products include perfumes, deodorants, kajal, mascara, blushes, nailpaints. All the cosmetic products are branded and of the supreme quality. '
  },
  {
    id:'special',
    title: 'Special Products',
    image: 'dry-fruits.jpg',
    text: 'We serve our customers with best quality dry fruits. We highly recommend our customers to explore and use various organic products.'
  },
  {
    id:'house-utilities',
    title: 'House Utilities',
    image: 'soaps-detergents-2.png',
    text: 'Our home essentials include toiletries like air freshener,toilet cleaner, mops, sponges, wipers etc. We have all kinds of detergents, bath soaps, washing soaps and handwashes.'
  },
  {
    id:'snacks-beverages',
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
    maxWidth: 300,
    height: 365,
    margin:'10px auto 10px auto',
    "&:hover":{
      backgroundColor: 'inherit !important',
      boxShadow:'0 7px 7px rgba(0,0,0,0.1), 0 5px 5px rgba(0,0,0,0.22)'
    //  boxShadow: '0 0 11px rgba(33,33,33,.2)'
    }
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
    paddingTop:30
  },
  chip: {
    fontSize: 18,
    padding: 28,
    marginBottom: 40
  }
  
});
// 5d409f215c6dac00170540b1
// 5d409f415c6dac00170540b2
export default function MediaCard(props) {
  const classes = useStyles();
  return (
      <div id="section3" style={{maxWidth: 1500, margin: '0px auto 40px auto'}}>
           <div style={{textAlign: 'center',marginTop: 30, marginBottom: 20}}>
              <Typography variant="h5" style={{marginBottom: 0, fontFamily: 'Signika, sans-serif', fontSize: 28,fontWeight: 600}}>CATEGORIES</Typography>
                        
                        <hr style={{ height: 3,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '200px'}} />
              </div>
          <Carousel
          className={classes.carousel}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={1}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
          focusOnSelect={true}
        >
            {data.map((item) => 
            <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Link to={`/category/${item.id}`} style={{textDecoration: 'none' }}>
                  <Card className={classes.card}>
                    
                      <CardMedia
                        className={classes.media}
                        image={require(`../assests/card/${item.image}`)}
                        title="Personal Care Products"
                      />
                      <CardContent >
                        <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', fontFamily: 'Signika, sans-serif'}}>
                          {item.title} 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
                          {item.text}
                        </Typography>
                      </CardContent>
                  </Card>
                </Link>
                </div>
            )}
          </Carousel>
          
   </div>
  );
}
