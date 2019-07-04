import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import brand from '../assests/brand4.svg';
import customer from '../assests/customer2.svg';
import premium from '../assests/premium3.svg';



const useStyles = makeStyles(theme => ({
    wrapper:{
        maxWidth: 1200,
        // margin: '-120px auto 0px auto',
        margin: '40px auto 80px auto',
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
     padding: "10px 40px",
      height: 210,
      backgroundColor: '#fff',
      color: '#000'
  },
  childTwo:{
    textAlign: 'center',
    margin: '10 auto',
    padding: "10px 40px",
    height: 230,
    backgroundColor: '#fff',
    color: '#000'
},
childThree:{
    textAlign: 'center',
     margin: '10 auto',
     padding: "10px 40px",
      height: 210,
      backgroundColor: '#fff',
      color: '#000'
},
icons:{
    height: 125
},
icons2:{
    height: 100
},
title:{
    margin: '5px 0px'
}
  }));

  export default function Features(){
      const classes = useStyles();
      return(
          <div id="section2">
              {/* <Typography variant="h4" style={{textAlign: 'center', marginTop: 20}}>Features</Typography> */}
              <div style={{textAlign: 'center',marginTop: 20}}>
              <Typography variant="h6" style={{marginBottom: 0}}>ABOUT US</Typography>
                        
                        <hr style={{ height: 3,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '200px'}} />
              </div>
              

              <Grid container className={classes.wrapper} spacing={24}>

                <Grid item xs={12} sm={12} md={4} className={classes.childOne}>
                <img src={brand} alt="img" className={classes.icons} />

                    <Typography variant="h5" className={classes.title} style={{marginTop: '-20px'}}>Branded Products</Typography>
                    <Typography variant="body1" >Our store brings to you the top quality brands under one roof.
                    {/* We provide the best brands with the most affordable prices in our stores. */}
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.childTwo}>
                <img src={customer} alt="img" className={classes.icons2} />

                <Typography variant="h5" className={classes.title}>Customer satisfaction</Typography>

                    <Typography variant="body1">
                        {/* Our main motto at Kenorita is that our customers should leave our store happy and content. */}
                        We provide the best services and products that would want you to visit our store time and again.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.childThree}>
                <img src={premium} alt="img"  className={classes.icons2}/>

                <Typography variant="h5" className={classes.title}>Premium Quality </Typography>

                    <Typography variant="body1">All the products undergo a quality check before being displayed for sale in our store.</Typography>
                </Grid>
              </Grid>
          </div>
      )
  }