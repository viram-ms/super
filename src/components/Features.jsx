import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import brand from '../assests/brand2.svg';
import customer from '../assests/customer.svg';
import premium from '../assests/premium.svg';



const useStyles = makeStyles(theme => ({
    wrapper:{
        maxWidth: 1200,
        // margin: '-120px auto 0px auto',
        margin: '80px auto 0px auto',
        [theme.breakpoints.down('sm')]:{
            margin: '20px auto',
        },
        display:'flex',
        justifyContent: 'center',
        alignContent:'center',
        // zIndex: 100000000,
        position:'relative'
    },
  childOne:{
     textAlign: 'center',
     margin: '10 auto',
     padding: 20,
      height: 300,
      [theme.breakpoints.down('sm')]:{
       height: 310
    },
      backgroundColor: '#00a651',
      color: 'white'
  },
  childTwo:{
    textAlign: 'center',
    margin: '10 auto',
    padding: 20,
    height: 300,
    [theme.breakpoints.down('sm')]:{
        height: 310
     },
    backgroundColor: '#303192',
    color: 'white'
},
childThree:{
    textAlign: 'center',
     margin: '10 auto',
     padding: 20,
      height: 300,
      [theme.breakpoints.down('sm')]:{
        height: 310
     },
      backgroundColor: '#f58221',
      color: 'white'
},
icons:{
    height: 110
},
title:{
    margin: '10px 0px'
}
  }));

  export default function Features(){
      const classes = useStyles();
      return(
          <div id="section2">
              <Grid container className={classes.wrapper}>
                <Grid item xs={12} sm={12} md={4} className={classes.childOne}>
                    <Typography variant="h5" className={classes.title}>Branded Products</Typography>
                    <img src={brand} alt="img" className={classes.icons} />
                    <Typography variant="body1" >Our store brings to you the top quality brands under one roof.If we don't serve it,you don't need it.We provide the best brands with the most affordable prices in our stores.
</Typography>

                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.childTwo}>
                <Typography variant="h5" className={classes.title}>Customer satisfaction</Typography>
                <img src={customer} alt="img" className={classes.icons} />

                    <Typography variant="body1" >Our main motto at Kenorita is that our customers should leave our store happy and content.We provide the best services and products that would want you to visit our store time and again.
</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.childThree}>
                <Typography variant="h5" className={classes.title}>Premium Quality </Typography>
                <img src={premium} alt="img"  className={classes.icons}/>

                    <Typography variant="body1" >All our products are of premium quality.All the products undergo a strenuous quality check before being displayed for sale in our store.</Typography>
                </Grid>
              </Grid>
          </div>
      )
  }