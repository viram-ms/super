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
const styles = theme => ({
    chip: {
        fontSize: 14,
        padding: 10,
        margin: 4,
        textAlign: 'center',
        backgroundColor: 'pink',
      },
      wrapper:{
        // backgroundImage: 'url(../assests/super-market-1.jpg)'
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
          width: 120,
          '&:focus': {
            width: 600,
          },
        },
      },
  });

  function searchFor(term){
    return function(x){
        console.log(x.subCategories.map((item) => {return item.name.includes(term)}));
        return x.subCategories.map((item) =>{ return item.name.includes(term)}) || !term;
        // return x.name.includes(term) || x.subCategories.map((item) => item.brands.map((product) => product.includes(term))) || !term; 
    }
  }

class Category extends Component{
    state={
        title: '',
        category : [],
        subCategory: [],
        term: '',
    }
    handleChange =(event) =>{
        this.setState({
          term: [event.target.value]
        });
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
                // subCategory: data[0].categories[0].subCategories
            })
        }
        
        console.log(this.state);

    }
    render(){
        const {title, category, subCategory} = this.state
        const {classes} = this.props;
        return(
            <div>
            <Navbar />
           
            {/* <h1 style={{marginTop: 100}}>Category</h1> */}
            <div className={classes.wrapper} style={{ marginTop: 100}} id="section3">
                <div style={{marginTop: '-100px'}} >
                    <img src={market} alt="img" style={{height: 400, width: '100%', position: 'relative', opacity: 0.5}}/>
                    <div style={{maxWidth: 1200, margin: 'auto',position: 'absolute', top: '13%',left: '50%',transform: 'translate(-50%, -50%)', textAlign: 'center',backgroundColor: 'rgba(1,0,1,0.5)',padding: 10}}>
                        <p style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '28px', color:'white'}}>{title} Products</p> 
                    </div>
                    <Grid container style={{position: 'absolute', top: '25%', left: '50%',transform: 'translate(-50%, -50%)', }}>
                    <Grid item xs={12} sm={12} md={6} style={{margin: 'auto'}}>
                    <div className={classes.search} >
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search Products"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                    value={this.state.term}
                    onChange={this.handleChange}
                    />
                    </div>
                </Grid>
            </Grid>
                </div>
                
            </div>

            <div style={{maxWidth: 1200, margin: 'auto',padding: 20}}>

                    {category.filter(searchFor(this.state.term)).map((item) => <div style={{marginTop: 20}}> 
                <Paper style={{padding: 20}}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} style={{textAlign: 'center'}}>
                            <img src={require(`../assests/${item.image}.jpg`)} alt="img" style={{height: 200}} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                        <h2 style={{textTransform: 'uppercase',textAlign: 'center'}}>{item.name}</h2> 
            <hr style={{height: 5, backgroundColor: '#f58221', border: 'none', borderRadius: 5}}/>
            <Grid container style={{marginTop: 5, marginBottom: 40}}>
            {item.subCategories.map((subcategory) => 
            <Grid item xs={12} sm={12} md={6}>
            <h4 style={{textAlign: 'center'}}>{subcategory.name}</h4>
            <div style={{textAlign: 'center'}}>
            {
                subcategory.brands
                    .map((brand) =>  <Chip color="primary" label={`${brand}`} className={classes.chip} /> )
            }
            </div>
         
            </Grid>
            )} 
            </Grid>
                        </Grid>
                    </Grid>
            
            </Paper>
            
            </div>
            )}
                 
              
            
            
            </div>
            <Footer />
            </div>
           
        );
    }
}

export default withStyles(styles)(Category);