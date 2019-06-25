import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
        footer: {
            position: "absolute",
            width: "100%",
            backgroundColor: "#2e2e2e",
            height: 160,
            textAlign: "center",
            padding: 0,
            bottom: 0,
            [theme.breakpoints.down("sm")]: {
              height: 300
            }
          },
    wrapper:{
        padding: 20,
        maxWidth: 1200,
        margin: 'auto',
        color:'white',
        "& p":{
            color: '#f58221',
            textDecoration: 'underline'
        }
    },
    address: {
      textDecoration: 'none',
      color: 'white' 
    },
    gridOne: {
      textAlign: 'left',
    },
    gridTwo: {
      textAlign: 'right',
      [theme.breakpoints.down("md")]: {
        textAlign: 'justify'
      }
    },
    
  }));

  export default function Footer(){
      const classes = useStyles();
      return(
          <div className={classes.footer}  id="section5">
              <Grid container className={classes.wrapper} spacing={12}>
                  <Grid item xs={12} sm={8} md={8} style={{textAlign: 'left'}}>
                    <Typography variant="body1" color="primary">Address</Typography>
                    <Typography variant="subtitle1" color="inherit" ><a href="https://goo.gl/maps/tPzvFWPTUc2sNPTaA" className={classes.address}>75, Sagar Tarang Building,<br /> Opposite Dariya Mahal, Nepean Sea Road,<br /> Mumbai - 400006, Maharashtra </a></Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} style={{textAlign: 'left', lineHeight: 4}} >
                    <Typography variant="body1" color="primary">Contact Us</Typography>
                    <Typography variant="subtitle1" color="inherit" style={{marginTop: 5}}><a href="tel:+918879490461" className={classes.address}><Phone style={{marginBottom: '-8px'}} /> +91-8879490461</a> </Typography>
                    <Typography variant="subtitle1" color="inherit" style={{marginTop: 10}}><Email style={{marginBottom: '-8px'}}/>  viram1999@gmail.com</Typography>
                  </Grid>
                  {/* <Grid item xs={12} sm={4} md={4} style={{textAlign: 'left'}} >
                    <Typography variant="body1" color="primary">Email</Typography>
                    <Typography variant="subtitle1" color="inherit">viram1999@gmail.com</Typography>
                  </Grid> */}
                  
              </Grid>
          </div>
      )
  }