import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../assests/logo2.png';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Link, animateScroll as scroll } from "react-scroll";
import { Typography } from '@material-ui/core';
import MobileNav from './MobileNav';

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
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.black, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.black, 0.25),
    // },
    // marginLeft: 0,
    // width: '92%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    // width: theme.spacing(7),
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
    // padding: theme.spacing(2, 2, 2, 7),
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: 120,
      
    //   '&:focus': {
    //     width: 200,
    //   },
    // },
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
  return (
    <div>
      <AppBar position="fixed" color="white">
        <Toolbar>
            <div style={{display:'flex',flexGrow: 1,alignItems:'center'}}>
         <img src={Logo} className={classes.companyLogo} alt="logo"  onClick={this.scrollToTop} />
            </div>
         <div className={classes.wrapper}>
           <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
           </Typography>
           <Typography variant="subtitle2" color="textSecondary" className={classes.header}> 
           <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT US
              </Link>
           </Typography>
           <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              CATEGORIES
              
              </Link>
           </Typography>
           <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                BRANDS
              </Link>
           </Typography>
           <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT US
              </Link>
           </Typography>
        
         {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Products..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div> */}
        </div>
        <div className={classes.sidebarwrapper}>
            <MobileNav 
            // handleClickOpen={this.handleClickOpen}
             />
          </div>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}
}

export default (withStyles(styles)(Navbar));


