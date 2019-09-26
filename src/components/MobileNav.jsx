
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-scroll";
import Search from '@material-ui/icons/Search';
import {Link as NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  listStyle:{
    textDecoration:'none',
    color:'#464646'
  },
  dividerLength:{
    width:175
  },
  header:{
    marginTop:10
  }
});

class MobileNav extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open} = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        
          <Toolbar disableGutters={!open} style={{}} >
          <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <NavLink to="/search">
                <Search style={{color:'rgba(0,0,0,0.54)'}}/>
              </NavLink>
           </Typography>
            <IconButton
              style={{color: 'rgba(0,0,0,0.54)'}}
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            
          </div>
          <List>
          {this.props.location === "/" &&  <ListItem>
           <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleDrawerClose}

              >
                HOME
              </Link>
           </Typography>
            </ListItem>}
            {this.props.location === "/" && <ListItem>
            <Typography variant="subtitle2" color="textSecondary" className={classes.header}> 
           <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleDrawerClose}
              >
                ABOUT US
              </Link>
           </Typography>
        </ListItem> }
        {this.props.location === "/" &&  <ListItem>
            <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleDrawerClose}

              >
              CATEGORIES
              
              </Link>
           </Typography>
        </ListItem> }
        {this.props.location === "/" &&  <ListItem>
            <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleDrawerClose}

              >
                BRANDS
              </Link>
           </Typography>
        </ListItem> }
                <ListItem>
                <Typography variant="subtitle2" color="textSecondary" className={classes.header}>
           <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.handleDrawerClose}

              >
                CONTACT US
              </Link>
           </Typography>
                </ListItem>
          
        </List>
        </Drawer>
      </div>
    );
  }
}

MobileNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MobileNav);
