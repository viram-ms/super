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
import CircularProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { async } from 'q';
const styles = theme => ({
    chip: {
        fontSize: 14,
        padding: 10,
        margin: 4,
        textAlign: 'center',
        backgroundColor: '#f58221',
      },
      search: {
        height: 60,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f2f2f2',
        '&:hover': {
          backgroundColor: '#f4f4f4',
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
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(2.5, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '250px',
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
      }
  });


class Search extends Component{
    state={
        title: '',
        category : [],
        subCategory: [],
        term: '',
        foundedTerm: '',
        show: false
    }
    handleChange =(event) =>{
        this.setState({
          term: event.target.value
        });
      }
    
    handleSubmit = async() => {
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
      const data= await res.json();
      console.log(data);
      this.setState({
        subCategory: data,
        foundedTerm: this.state.term
      });
      console.log(this.state.subCategory.length);
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
                    <Grid item xs={10} sm={10} md={9} style={{margin: '10px auto 20px auto'}}>
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
                  subCategory.length >0 && 
                  <div style={{maxWidth: 1200, margin: 'auto',padding: 20}}>
                    <Paper style={{padding: 20}}>
                        <div style={{display: 'flex'}}> 
                        <Typography variant="h5" style={{paddingLeft: 20, flexGrow: 1}}>{this.state.foundedTerm}</Typography>
                    <Button onClick={this.handleClose}>Close</Button>
                            </div>
                    
                    <Grid container >
                    {
                      subCategory.map((item) => 
                        <Grid item xs={12} sm={12} md={12/this.state.subCategory.length} style={{padding: 20, margin: 'auto'}}> 
                        <Typography variant="h6" style={{marginBottom: 10}}>{item.name}</Typography>
                        
                        <hr style={{ height: 2,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '150px', margin: 0}} />
                        <Typography varaint="body1" style={{margin: '10px 0px'}}>Similar Products</Typography>
                        {item.brands.map((brands) => {/*if(brands !== this.state.foundedTerm)*/ return <Chip color="primary" label={`${brands}`} className={classes.chip} />})}
                        </Grid>
                     ) 
                    }
                     </Grid>
                    </Paper>
                  </div>
              }
            </div> 
           
        );
    }
}

export default withStyles(styles)(Search);