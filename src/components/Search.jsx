import React , {Component} from 'react';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import market from '../assests/super2.jpg';
import Paper from '@material-ui/core/Paper';
// import Hair from '../assests/hair-clipart.jpg';
// import Dental from '../assests/dental-clipart.jpg'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { async } from 'q';
const styles = theme => ({
  chip: {
    fontSize: 14,
    padding: 10,
    margin: "4px",
    textAlign: 'center',
    color: '#f58221',
    border: ' 1px solid #f58221',
    "&:hover":{
      color: '#fff',
      backgroundColor: '#f58221'
    }
  },
  searchChips: {
    fontSize: 14,
    padding: 10,
    margin: "5px 5px 0px 0px",
    textAlign: 'center',
    color: '#f58221',
    border: ' 1px solid #f58221',
    "&:hover":{
      color: '#fff',
      backgroundColor: '#f58221'
    }
  },
      search: {
        height: 60,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f4f4f4',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
        // marginLeft: 0,
        marginTop: 20,
        width: '100%',
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
        color: 'black',
        fontSize: 18
      },
      inputInput: {
        padding: theme.spacing(2.5, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '280px',
        [theme.breakpoints.up('sm')]: {
          width: 600,
          // '&:focus': {
          //   width: 400,
          // },
        },
      },
      progress: {
        margin: '100px auto',
        color: 'red'
      },
      textWrapper : {
        maxWidth: 1200,
        margin: 'auto',
        position: 'absolute',
        top: 180,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        backgroundColor: 'rgba(1,0,1,0.5)',
        padding: "5px 50px",
        [theme.breakpoints.down('sm')]: {
          top: 180
        }
      },
      divider: {
        height: 5,
        backgroundColor: '#f58221',
        border: 'none',
        borderRadius: 5,
        width: '90%'
      },
      progressCircular:{
        display: 'block',
        margin: '10px auto'
      }
  });


class Search extends Component{
    state={
        title: '',
        category : [],
        subCategory: [],
        term: '',
        foundedTerm: '',
        show: false,
        showMessage : '',
        searching: false
    }
    handleChange =(event) =>{
        this.setState({
          term: event.target.value
        });
      }
    
    handleSubmit = async(event) => {
     
      if(event.key === 'Enter'){
        this.setState({
          searching: true,
          subCategory: '',
          showMessage: false
        })
      console.log(JSON.stringify({"item": this.state.term}));
      const res = await fetch(`https://kenorita.herokuapp.com/search-product`,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }, 
        body: JSON.stringify({"item": this.state.term})
      });

      console.log(res);
    //   setInterval(() => { 
    //     this.setState({
    //         searching: true
    //     })
    // }, 2000);
     
      const data= await res.json();
      console.log(data);
      if(data.length > 0){
        this.setState({
          subCategory: data,
          foundedTerm: this.state.term,
          showMessage: '',
          searching: false
        });
      }
      else {
        this.setState({
          subCategory: '',
          showMessage : 'Your search did not match any products',
          searching: false
        })
      }
      console.log(this.state.subCategory.length);
    }
  }
    handleClose = () =>{
        this.setState({
            subCategory: ''
        })
    }
    render(){
        const {title, category, subCategory, show, foundedTerm} = this.state
        const {classes} = this.props;
        return(
            <div>   
                <Grid container>
                    <Grid item xs={10} sm={10} md={11} style={{margin: '10px auto'}}>
                      <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search for any brands or products."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Search' }}
                        value={this.state.term}
                        onChange={this.handleChange}
                        onKeyPress={this.handleSubmit}
                        />
                      </div>
                  </Grid>
                  </Grid>
                  {
                    this.state.searching && <CircularProgress className={classes.progressCircular} />
                  }
                  {
                  subCategory.length >0 && 
                  <div style={{maxWidth: 1200, margin: 'auto',padding: 20}}>
                    <Paper style={{padding: 20}}>
                    <div style={{display: 'flex'}}> 
<Typography variant="h5" style={{paddingLeft: 20, flexGrow: 1}}>Matched Items for <span ><b>"{this.state.foundedTerm}"</b></span></Typography>
<Button onClick={this.handleClose}>Close</Button>
    </div>
                    
                    <Grid container >
                    {
                      subCategory.map((item) => 
                        <Grid item xs={12} sm={12} md={12/this.state.subCategory.length} style={{padding: 20, margin: 'auto'}}> 
                        <Typography variant="h6" style={{marginBottom: 10}}>{item.name}</Typography>
                        
                        <hr style={{ height: 2,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '150px', margin: 0}} />
                        {/* <Typography varaint="body1" style={{margin: '10px 0px'}}>Similar Products</Typography> */}
                        <div style={{marginTop: 10}}>
                        {item.brands.map((brands) => {if(brands.toLowerCase().includes(this.state.foundedTerm.trim()) || brands.includes(this.state.foundedTerm.trim())) return <Chip variant="outlined" label={`${brands}`} className={classes.searchChips} />})}
                        </div>
                        </Grid>
                     ) 
                    }
                     </Grid>
                    </Paper>
                  </div>
              }
              {
                this.state.showMessage.length > 0 && <div  style={{maxWidth: 1200, margin: 'auto',padding: 20}}><Paper style={{padding: 20}}><Typography>{this.state.showMessage}</Typography></Paper></div>
              }
            </div> 
           
        );
    }
}

export default withStyles(styles)(Search);