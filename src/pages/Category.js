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
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '@material-ui/core/Button';
import Carousel from "react-multi-carousel";
import Card from '@material-ui/core/Card';


import { async } from 'q';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const styles = theme => ({
  progressCircular:{
    display: 'block',
    margin: '10px auto'
  },
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
        color: 'rgba(0,0,0,1)',
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
        color: 'red',
        [theme.breakpoints.down('sm')]:{
          margin:"90px auto"
        }
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
        // position: 'absolute',
        // float: 'left',
        height: 5,
        backgroundColor: '#f58221',
        border: 'none',
        borderRadius: 5,
        width: '20%',
        // margin: 10
      },
      carousel:{
        maxWidth: 1400,
        margin: 'auto'
      },
      card: {
        height: 200,
        minWidth: 300
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
        term: 'Himalaya',
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
    handleClose = () =>{
      this.setState({
          subCategory: ''
      })
  }
    render(){
        const {title, category, subCategory, show, foundedTerm} = this.state
        const {classes} = this.props;
        console.log(this.props);
        return(
            <div>
            <Navbar />
            {!show && <LinearProgress className={classes.progress} />}  

           

            {show &&
               <div style={{ marginTop: 100}} id="section4">
                <div style={{marginTop: '-100px'}} >
                    <img src={market} alt="img" style={{height: 400, width: '100%', position: 'relative', opacity: 0.5}}/>
                    <div className={classes.textWrapper}>
                        <p style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '28px', color:'white'}}>{title}</p> 
                    </div> 
                </div>
                <Grid container>
                    <Grid item xs={10} sm={10} md={9} style={{margin: 'auto'}}>
                      <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search any brands or product "
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
                    this.state.searching && <CircularProgress className={classes.progressCircular} />
                  }


                {
                  subCategory.length >0 && 
                  <div style={{maxWidth: 1200, margin: 'auto',padding: 20}}>
                    <Paper style={{padding: 20}}>
                    <div style={{display: 'flex',justifyContent: 'flex-end'}}> 

                        <Typography variant="h5" style={{paddingLeft:10, flexGrow: 1}}>Matched Items for <span ><b>"{this.state.foundedTerm}"</b></span></Typography>
                    <Button onClick={this.handleClose}>Close</Button>
                            </div>
                    <Grid container >
                    {
                      subCategory.map((item) => 
                        <Grid item xs={12} sm={12} md={6} style={{padding: 10}}> 
                        <Typography variant="h6" style={{marginBottom: 0}}>{item.name}</Typography>
                        
                        <hr style={{ height: 2,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '150px',float: 'left'}} />
                        <div style={{marginTop: 20}}>
                        {item.brands.map((brands) => {if(brands.toLowerCase().includes(this.state.foundedTerm.trim()) || brands.includes(this.state.foundedTerm.trim())) return <Chip variant="outlined" label={`${brands}`} className={classes.searchChips} />})}

                        </div>

                        {/* <hr style={{ height: 2,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '150px', margin: 0}} /> */}
                        {/* <Typography varaint="body1" style={{margin: '10px 0px'}}>Similar Products</Typography>
                        <hr style={{ height: 2,backgroundColor: '#f58221',border: 'none',borderRadius: 5,width: '150px', margin: 0}} />

                        {item.brands.map((brands) => {if(!brands.includes(this.state.foundedTerm)) return <Chip color="primary" variant="outlined" label={`${brands}`} className={classes.chip} />})} */}
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



            {/* {show && 
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
          </div>} */}


          { show && 
          category.map((item) => <div className={classes.carousel}>  
           <h2 style={{textTransform: 'uppercase',textAlign: 'center'}}>{item.name}</h2> 
                          <hr className={classes.divider} />
                   <div className={classes.carousel}> 

                   <Carousel
          // className={classes.carousel}
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={1}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? false : false}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left-20-px"
          focusOnSelect={true}
        >
                      
                      
                            {item.subCategories.map((subcategory) => 
                           <Card style={{padding: 10,margin: 10}} className={classes.card}>
                            <div>
                              <h4 style={{textAlign: 'center'}}>{subcategory.name}</h4>
                              <div style={{textAlign: 'center'}}>
                                {subcategory.brands.map((brand) =>  <Chip color="primary" label={`${brand}`} className={classes.chip} variant="outlined" /> )}
                              </div>
                              </div>
                              </Card>
                            )} 
                          
                   </Carousel>   
                     </div>
                       
              
            </div>
            )}
       



            <Footer id="section5"/>
            </div> 
           
        );
    }
}

export default withStyles(styles)(Category);