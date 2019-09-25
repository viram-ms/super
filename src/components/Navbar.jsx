import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../assests/logo2.png';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Link as ReactLink, animateScroll as scroll } from "react-scroll";
import {Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import MobileNav from './MobileNav';
import Search from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header:{
    marginRight:5,
    marginLeft:5,
    padding:10,
    cursor: 'pointer'
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F5F5F6',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      border: '1px solid rgba(0,0,0,0.3)',
    },
    '&:selected': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
     
    },
    marginLeft: 0,
    width: '92%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    float: 'right',
    height: 20,
    padding: "12px 10px 10px 60px",
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 240,
      '&:focus': {
        width: 300,
      },
    },
  },
  companyLogo:{
    width:80, 
    position: 'relative',
    paddingLeft: 0,
    [theme.breakpoints.up('sm')]:{
        width: 120
    },
    [theme.breakpoints.down('sm')]: {
        width: '100px',
       
      },
  },
  sidebarwrapper:{
    [theme.breakpoints.up('md')]:{
      display:'none'
    }
  },
  wrapper: {
   
    [theme.breakpoints.up('md')] : {
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'middle'
    },
    display:'none'
},
});

class Navbar extends Component {

   scrollToTop = () => {
    scroll.scrollToTop();
  }
render(){

const {classes} = this.props;
console.log(this.props.location); 
  return (
    <div>
      <AppBar position="relative" color="white">
        <Toolbar>
            <div style={{display:'flex',alignItems:'center', flexGrow: 1}}>
            <Link to="/"><img src={Logo} className={classes.companyLogo} alt="logo"  onClick={this.scrollToTop} /></Link>
            </div>
         <div className={classes.wrapper}>
           {this.props.location === "/" && <Typography variant="subtitle1" color="textSecondary" className={classes.header}>
           <ReactLink
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </ReactLink>
           </Typography>}
           {this.props.location === "/" && <Typography variant="subtitle1" color="textSecondary" className={classes.header}> 
           <ReactLink
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT US
              </ReactLink>
            </Typography> }
            {this.props.location === "/" && <Typography variant="subtitle1" color="textSecondary" className={classes.header}>
           <ReactLink
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              CATEGORIES
              
              </ReactLink>
        </Typography> }
        {this.props.location === "/" && <Typography variant="subtitle1" color="textSecondary" className={classes.header}>
           <ReactLink
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                BRANDS
              </ReactLink>
  </Typography> }
           <Typography variant="subtitle1" color="textSecondary" className={classes.header}>
           <ReactLink
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT US
              </ReactLink>
           </Typography>
           <Typography variant="subtitle1" color="textSecondary" className={classes.header}>
           <ReactLink
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Search style={{color:'rgba(0,0,0,0.54)'}}/>
              </ReactLink>
           </Typography>
           </div>
          
           {/* <Search /> */}
        
         
        
        <div className={classes.sidebarwrapper}>
            <MobileNav 
            location={this.props.location}
             />
          </div>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}
}

export default (withStyles(styles)(Navbar));


