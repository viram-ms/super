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
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
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

  // function searchFor(term){
  //   return function(x){
  //       console.log(x.subCategories.map((item) => {return item.name.includes(term)}));
  //       return x.subCategories.map((item) =>{ return item.name.includes(term)}) || !term;
  //       // return x.name.includes(term) || x.subCategories.map((item) => item.brands.map((product) => product.includes(term))) || !term; 
  //   }
  // }

class Category extends Component{
    state={
        title: '',
        category : [],
        subCategory: [],
        term: '',
        foundedTerm: '',
        show: false,
        showMessage : ''
    }
    handleChange =(event) =>{
        this.setState({
          term: event.target.value
        });
      }
    
    handleSubmit = async(event) => {
      if(event.key === 'Enter'){
      console.log(JSON.stringify({"item": this.state.term}));
      try {
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
      if(data.length > 0){
        this.setState({
          subCategory: data,
          foundedTerm: this.state.term
        });
      }
      else {
        this.setState({
          subCategory: '',
          showMessage : 'Your search did not match any products'
        })
      }
      
      } catch(e) {
        console.log(e);
      }
      
      console.log(this.state.subCategory.length);
    }
    }

    async componentDidMount(){
        console.log('hi');
        console.log(this.props);
        const res = await fetch(`https://kenorita.herokuapp.com/product-list/${this.props.match.params.id}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        });

        console.log(res);
        const data = await res.json();
        console.log(data);
        if(data){
            this.setState({
                title: data[0].name,
                category: data[0].categories,
                show: true
                // subCategory: data[0].categories[0].subCategories
            })
        }
        

    }
    render(){
        const {title, category, subCategory, show, foundedTerm} = this.state
        const {classes} = this.props;
        return(
            <div>
            <Navbar />
            {!show && <CircularProgress className={classes.progress} />}  

           

            {show &&
               <div style={{ marginTop: 100}} id="section3">
                <div style={{marginTop: '-100px'}} >
                    <img src={market} alt="img" style={{height: 400, width: '100%', position: 'relative', opacity: 0.5}}/>
                    <div className={classes.textWrapper}>
                        <p style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '28px', color:'white'}}>{title}</p> 
                    </div> 
                </div>
                <Grid container>
                    <Grid item xs={10} sm={10} md={6} style={{margin: 'auto', display: 'flex'}}>
                      <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search any brands or product..."
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
                      {/* <Button onClick={this.handleSubmit} variant="contained" color="primary"> Submit </Button> */}


                  </Grid>
                  </Grid>
                </div>}


                {
                  subCategory.length >0 && 
                  <div style={{maxWidth: 1200, margin: 'auto',padding: 20}}>
                    <Paper style={{padding: 20}}>
                    <Typography variant="h5" style={{paddingLeft: 20}}>{this.state.foundedTerm}</Typography>
                    <Grid container >
                    {
                      subCategory.map((item) => 
                        <Grid item xs={12} sm={12} md={12/this.state.subCategory.length} style={{padding: 20, margin: 'auto'}}> 
                        <Typography variant="h6" style={{marginBottom: 10}}>{item.name}</Typography>
                        <hr style={{ height: 2,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '150px', margin: 0}} />
                        <Typography varaint="body1" style={{margin: '10px 0px'}}>Similar Products</Typography>
                        {item.brands.map((brands) => {if(brands !== this.state.foundedTerm) return <Chip color="primary" label={`${brands}`} className={classes.chip} />})}
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



            {show && 
                <div style={{maxWidth: 1200, margin: 'auto',padding: 20}}>
                  {category.map((item) => <div style={{marginTop: 20}}>  
                    <Paper style={{padding: 20}}>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={3} style={{textAlign: 'center'}}>
                            <img src={require(`../assests/${item.image}`)} alt="img" style={{height: 200, width: 250, borderRadius: 5}} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={9}>
                          <h2 style={{textTransform: 'uppercase',textAlign: 'center'}}>{item.name}</h2> 
                          <hr className={classes.divider} />
                          <Grid container style={{marginTop: 5, marginBottom: 40}}>
                            {item.subCategories.map((subcategory) => 
                            <Grid item xs={12} sm={12} md={6}>
                              <h4 style={{textAlign: 'center'}}>{subcategory.name}</h4>
                              <div style={{textAlign: 'center'}}>
                                {subcategory.brands.map((brand) =>  <Chip color="primary" label={`${brand}`} className={classes.chip} /> )}
                              </div>
                            </Grid>
                            )} 
                          </Grid>
                        </Grid>
                    </Grid>
              </Paper>
            </div>
            )}
          </div>}
            <Footer />
            </div> 
           
        );
    }
}

export default withStyles(styles)(Category);