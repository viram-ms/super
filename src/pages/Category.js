import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Close from '@material-ui/icons/Close';
import Carousel from "react-multi-carousel";
import Card from "@material-ui/core/Card";
import Dialog from '@material-ui/core/Dialog';
import Slider from '../components/Slider';
import pic1 from "../assests/Photoshoot/Bulk/resized (5)/1.jpg";
import pic2 from "../assests/Photoshoot/Bulk/resized (5)/2.jpg";
import pic3 from "../assests/Photoshoot/Bulk/resized (5)/3.jpg";
import pic4 from "../assests/Photoshoot/Bulk/resized (5)/4.jpg";
import pic5 from "../assests/Photoshoot/Bulk/resized (5)/5.jpg";
import pic6 from "../assests/Photoshoot/Bulk/resized (5)/6.jpg";
import pic7 from "../assests/Photoshoot/Bulk/resized (5)/7.jpg";
import pic8 from "../assests/Photoshoot/Bulk/resized (5)/8.jpg";
import pic10 from "../assests/Photoshoot/Bulk/resized (5)/10.jpg";




import pic1c from "../assests/Photoshoot/Freeze/resized (4)/1.jpg";
import pic2c from "../assests/Photoshoot/Freeze/resized (4)/2.jpg";
import pic4c from "../assests/Photoshoot/Freeze/resized (4)/4.jpg";
import pic5c from "../assests/Photoshoot/Freeze/resized (4)/5.jpg";
import pic6c from "../assests/Photoshoot/Freeze/resized (4)/6.jpg";
import pic7c from "../assests/Photoshoot/Freeze/resized (4)/7.jpg";
import pic8c from "../assests/Photoshoot/Freeze/resized (4)/8.jpg";
import pic9c from "../assests/Photoshoot/Freeze/resized (4)/9.jpg";
import pic10c from "../assests/Photoshoot/Freeze/resized (4)/10.jpg";
import pic11c from "../assests/Photoshoot/Freeze/resized (4)/11.jpg";

import pic1d from "../assests/Photoshoot/baby/resized (5)/1.jpg";
import pic2d from "../assests/Photoshoot/baby/resized (5)/2.jpg";
import pic3d from "../assests/Photoshoot/baby/resized (5)/3.jpg";
import pic4d from "../assests/Photoshoot/baby/resized (5)/4.jpg";
import pic5d from "../assests/Photoshoot/baby/resized (5)/5.jpg";
import pic6d from "../assests/Photoshoot/baby/resized (5)/6.jpg";
import pic7d from "../assests/Photoshoot/baby/resized (5)/7.jpg";
import pic8d from "../assests/Photoshoot/baby/resized (5)/8.jpg";

import pic1e from "../assests/Photoshoot/snacks/resized (6)/1.jpg";
import pic2e from "../assests/Photoshoot/snacks/resized (6)/2.jpg";
import pic3e from "../assests/Photoshoot/snacks/resized (6)/3.jpg";
import pic4e from "../assests/Photoshoot/snacks/resized (6)/4.jpg";
import pic5e from "../assests/Photoshoot/snacks/resized (6)/5.jpg";
import pic6e from "../assests/Photoshoot/snacks/resized (6)/6.jpg";
import pic7e from "../assests/Photoshoot/snacks/resized (6)/7.jpg";
import pic8e from "../assests/Photoshoot/snacks/resized (6)/8.jpg";
import pic9e from "../assests/Photoshoot/snacks/resized (6)/9.jpg";
import pic10e from "../assests/Photoshoot/snacks/resized (6)/10.jpg";
import pic11e from "../assests/Photoshoot/snacks/resized (6)/11.jpg";
import pic12e from "../assests/Photoshoot/snacks/resized (6)/12.jpg";
import pic13e from "../assests/Photoshoot/snacks/resized (6)/13.jpg";
import pic14e from "../assests/Photoshoot/snacks/resized (6)/14.jpg";
import pic15e from "../assests/Photoshoot/snacks/resized (6)/15.jpg";
import pic16e from "../assests/Photoshoot/snacks/resized (6)/16.jpg";
import pic17e from "../assests/Photoshoot/snacks/resized (6)/17.jpg";

import pic1f from "../assests/Photoshoot/kitchen/resized (7)/1.jpg";
import pic2f from "../assests/Photoshoot/kitchen/resized (7)/2.jpg";
import pic3f from "../assests/Photoshoot/kitchen/resized (7)/3.jpg";
import pic4f from "../assests/Photoshoot/kitchen/resized (7)/4.jpg";
import pic5f from "../assests/Photoshoot/kitchen/resized (7)/5.jpg";
import pic6f from "../assests/Photoshoot/kitchen/resized (7)/6.jpg";
import pic7f from "../assests/Photoshoot/kitchen/resized (7)/7.jpg";
import pic8f from "../assests/Photoshoot/kitchen/resized (7)/8.jpg";
import pic9f from "../assests/Photoshoot/kitchen/resized (7)/9.jpg";
import pic10f from "../assests/Photoshoot/kitchen/resized (7)/10.jpg";
import pic11f from "../assests/Photoshoot/kitchen/resized (7)/11.jpg";
import pic12f from "../assests/Photoshoot/kitchen/resized (7)/12.jpg";
import pic13f from "../assests/Photoshoot/kitchen/resized (7)/13.jpg";
import pic14f from "../assests/Photoshoot/kitchen/resized (7)/14.jpg";
import pic15f from "../assests/Photoshoot/kitchen/resized (7)/15.jpg";
import pic16f from "../assests/Photoshoot/kitchen/resized (7)/16.jpg";
import pic17f from "../assests/Photoshoot/kitchen/resized (7)/17.jpg";

import pic1g from "../assests/Photoshoot/house/resized (8)/1.jpg";
import pic2g from "../assests/Photoshoot/house/resized (8)/2.jpg";
import pic3g from "../assests/Photoshoot/house/resized (8)/3.jpg";
// import pic4g from "../assests/Photoshoot/house/resized (8)/4.jpg";
import pic5g from "../assests/Photoshoot/house/resized (8)/5.jpg";
import pic6g from "../assests/Photoshoot/house/resized (8)/6.jpg";
import pic7g from "../assests/Photoshoot/house/resized (8)/7.jpg";
import pic8g from "../assests/Photoshoot/house/resized (8)/8.jpg";
import pic9g from "../assests/Photoshoot/house/resized (8)/9.jpg";
import pic10g from "../assests/Photoshoot/house/resized (8)/10.jpg";
import pic11g from "../assests/Photoshoot/house/resized (8)/11.jpg";

import pic1h from "../assests/Photoshoot/hair/resized (9)/1.jpg";
import pic2h from "../assests/Photoshoot/hair/resized (9)/2.jpg";
import pic3h from "../assests/Photoshoot/hair/resized (9)/3.jpg";
import pic4h from "../assests/Photoshoot/hair/resized (9)/4.jpg";
import pic5h from "../assests/Photoshoot/hair/resized (9)/5.jpg";
import pic6h from "../assests/Photoshoot/hair/resized (9)/6.jpg";
import pic7h from "../assests/Photoshoot/hair/resized (9)/7.jpg";
import pic8h from "../assests/Photoshoot/hair/resized (9)/8.jpg";
import pic9h from "../assests/Photoshoot/hair/resized (9)/9.jpg";
import pic10h from "../assests/Photoshoot/hair/resized (9)/10.jpg";
import pic11h from "../assests/Photoshoot/hair/resized (9)/11.jpg";
import pic12h from "../assests/Photoshoot/hair/resized (9)/12.jpg";
import pic13h from "../assests/Photoshoot/hair/resized (9)/13.jpg";
import pic14h from "../assests/Photoshoot/hair/resized (9)/14.jpg";
import pic15h from "../assests/Photoshoot/hair/resized (9)/15.jpg";
import pic16h from "../assests/Photoshoot/hair/resized (9)/16.jpg";
import pic17h from "../assests/Photoshoot/hair/resized (9)/17.jpg";
import pic18h from "../assests/Photoshoot/hair/resized (9)/18.jpg";

import pic1j from "../assests/Photoshoot/cosmetics/1.jpg";
import pic2j from "../assests/Photoshoot/cosmetics/2.jpg";
import pic3j from "../assests/Photoshoot/cosmetics/3.jpg";
import pic4j from "../assests/Photoshoot/cosmetics/4.jpg";





const photos_1 = [`${pic1}`,`${pic2}`,`${pic3}`,`${pic4}`,`${pic5}`,`${pic6}`,`${pic7}`,`${pic8}`,`${pic10}` ];
const photos_3 = [`${pic1c}`,`${pic2c}`,`${pic4c}`,`${pic5c}`,`${pic6c}`,`${pic7c}`,`${pic8c}`,`${pic9c}`,`${pic10c}`,`${pic11c}` ];
const photos_4 = [`${pic1d}`,`${pic2d}`,`${pic3d}`,`${pic4d}`,`${pic5d}`,`${pic6d}`,`${pic7d}`,`${pic8d}` ];
const photos_5 = [`${pic1e}`,`${pic2e}`,`${pic3e}`,`${pic4e}`,`${pic5e}`,`${pic6e}`,`${pic7e}`,`${pic8e}`,`${pic9e}`,`${pic10e}`,`${pic11e}`,`${pic12e}`,`${pic13e}`,`${pic14e}`, `${pic15e}`,`${pic16e}`,`${pic17e}` ];
const photos_6 = [`${pic1f}`,`${pic2f}`,`${pic3f}`,`${pic4f}`,`${pic5f}`,`${pic6f}`,`${pic7f}`,`${pic8f}`,`${pic9f}`,`${pic10f}`,`${pic11f}`,`${pic12f}`,`${pic13f}`,`${pic14f}`, `${pic15f}`,`${pic16f}`,`${pic17f}` ];
const photos_7 = [`${pic1g}`,`${pic2g}`,`${pic3g}`,`${pic5g}`,`${pic6g}`,`${pic7g}`,`${pic8g}`,`${pic9g}`,`${pic10g}`,`${pic11g}` ];
const photos_8 = [`${pic1h}`,`${pic2h}`,`${pic3h}`,`${pic4h}`,`${pic5h}`,`${pic6h}`,`${pic7h}`,`${pic8h}`,`${pic9h}`,`${pic10h}`,`${pic11h}`,`${pic12h}`,`${pic13h}`,`${pic14h}`, `${pic15h}`,`${pic16h}`,`${pic17h}`,`${pic18h}` ];
const photos_9 = [`${pic1j}`,`${pic2j}`,`${pic3j}`,`${pic4j}` ];


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
  progressCircular: {
    display: "block",
    margin: "10px auto"
  },
  chip: {
    fontSize: 14,
    padding: 10,
    margin: "4px",
    textAlign: "center",
    // color: "#f58221",
    border: " 1px solid #f58221",
    // "&:hover": {
      color: "#fff",
      backgroundColor: "#f58221"
    // }
  },
  searchChips: {
    fontSize: 14,
    padding: 10,
    margin: "5px 5px 0px 0px",
    textAlign: "center",
    color: "#f58221",
    border: " 1px solid #f58221",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#f58221"
    }
  },
  search: {
    height: 60,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#f4f4f4"
    },
    marginTop: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "rgba(0,0,0,1)"
  },
  inputInput: {
    padding: theme.spacing(2.5, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "280px",
    [theme.breakpoints.up("sm")]: {
      width: 600
    }
  },
  progress: {
    margin: "100px auto",
    color: "red",
    [theme.breakpoints.down("sm")]: {
      margin: "90px auto"
    }
  },
  textWrapper: {
    maxWidth: 1500,
    margin: "auto",
    position: "absolute",
    top: 180,
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    // backgroundColor: "rgba(1,0,1,0.5)",
    padding: "5px 50px",
    [theme.breakpoints.down("sm")]: {
      top: 180
    }
  },
  divider: {
    height: 5,
    backgroundColor: "#f58221",
    border: "none",
    borderRadius: 5,
    width: "20%"
  },
  carousel: {
    maxWidth: 1400,
    margin: "auto"
  },
  card: {
    minHeight: 200,
    minWidth: 300,
    backgroundColor: 'rgba(255,165,0,0.65)'
  }
});

class Category extends Component {
  state = {
    title: "",
    category: [],
    subCategory: [],
    term: "",
    foundedTerm: "",
    show: false,
    showMessage: "",
    searching: false,
    open: false
  };
  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleSubmit = async event => {
    if (event.key === "Enter") {
      this.setState({
        searching: true,
        subCategory: "",
        showMessage: false
      });
      console.log(JSON.stringify({ item: this.state.term }));
      try {
        const res = await fetch(
          `https://kenorita.herokuapp.com/search-product`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify({ item: this.state.term })
          }
        );

        console.log(res);
        const data = await res.json();
        console.log(data);
        if (data.length > 0) {
          this.setState({
            subCategory: data,
            foundedTerm: this.state.term,
            showMessage: "",
            searching: false,
            open: true
          });
        } else {
          this.setState({
            subCategory: "",
            showMessage: "Your search did not match any products",
            searching: false,
            open: true
          });
        }
      } catch (e) {
        console.log(e);
      }

      console.log(this.state.subCategory.length);
    }
  };

  async componentDidMount() {
    console.log("hi");
    console.log(this.props);
    const res = await fetch(
      `https://kenorita.herokuapp.com/product-list/${
        this.props.match.params.id
      }`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    );

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (data) {
      this.setState({
        title: data[0].name,
        category: data[0].categories,
        show: true
      });
    }
  }
  handleClose = () => {
    this.setState({
      subCategory: ""
    });
  };

  handleClick = async(value) => {
    await this.setState({
      term: value
    })
    this.setState({
      searching: true,
      subCategory: "",
      showMessage: false
    });
    try {
      const res = await fetch(
        `https://kenorita.herokuapp.com/search-product`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: JSON.stringify({ item: this.state.term })
        }
      );
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        this.setState({
          open: true,
          subCategory: data,
          foundedTerm: this.state.term,
          showMessage: "",
          searching: false
        });
      } else {
        this.setState({
          open: true,
          subCategory: "",
          showMessage: "Your search did not match any products",
          searching: false
        });
      }
    } catch (e) {
      console.log(e);
    }

    console.log(this.state.subCategory.length);
  }

  
  render() {
    const { title, category, subCategory, show } = this.state;
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
        <Navbar />
        {!show && (
          <LinearProgress
            className={classes.progress}
            style={{ top: "-92px" }}
          />
        )}
{/* linear-gradient(90deg, rgba(74,232,142,1) 1%, rgba(88,98,153,1) 45%, rgba(233,161,83,1) 100%) */}
        {show && (
          <div style={{}} id="section4">
            <div style={{ }}>
              <div style={{padding: 25}} >
                <p
                  style={{
                    margin: 0,
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontSize: "2.2rem",
                    color: "black",
                    fontWeight: 550,
                    fontFamily: "Poppins, sans-serif"
                  }}
                >
                  {/* {title}ss */}
                </p>
                 {title ==="Personal Care" && <Slider photos={photos_8} name="PERSONAL CARE PRODUCTS" props={this.props}/>}
                {title ==="Dairy Products" && <Slider photos={photos_3} name="DAIRY PRODUCTS" props={this.props}/>}
                {title ==="Grocery" && <Slider photos={photos_6} name="GROCERY PRODUCTS" props={this.props}/>}
                {title ==="Cosmetic" && <Slider photos={photos_9} name="COSMETIC PRODUCTS" props={this.props}/>}
                {title ==="Special" && <Slider photos={photos_5} name="SPECIAL PRODUCTS" props={this.props}/>}
                {title ==="House Utilities" && <Slider photos={photos_7} name="HOUSE UTILITIES PRODUCTS" props={this.props}/>}
                {title ==="Snacks & Beverages" && <Slider photos={photos_5} name="SNACKS & BEVERAGES" props={this.props}/>}
              </div>
            </div>
            {/* <Grid container>
              <Grid item xs={10} sm={10} md={9} style={{ margin: "auto" }}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search any brands or product "
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "Search" }}
                    value={this.state.term}
                    onChange={this.handleChange}
                    onKeyPress={this.handleSubmit}
                  />
                </div>
              </Grid>
            </Grid> */}
          </div>
        )}

        {this.state.searching && (
          <CircularProgress className={classes.progressCircular} />
        )}

        {subCategory.length > 0 && (
           <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open} width="md">
          <div style={{ maxWidth: 1500, margin: "auto", padding: 20 }}>
            <Paper style={{ padding: 10 }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  variant="h5"
                  style={{ paddingLeft: 10, flexGrow: 1 }}
                >
                  Matched Items for{" "}
                  <span>
                    <b>"{this.state.foundedTerm}"</b>
                  </span>
                </Typography>
                <Close onClick={this.handleClose} />
                {/* <Button onClick={this.handleClose}>Close</Button> */}
              </div>
              <Grid container>
                {subCategory.map(item => (
                  <Grid item xs={12} sm={12} md={6} style={{ padding: 10 }}>
                    <Typography variant="h6" style={{ marginBottom: 0 }}>
                      {item.name}
                    </Typography>

                    <hr
                      style={{
                        height: 2,
                        backgroundColor: "#f58221",
                        border: "none",
                        borderRadius: 5,
                        width: "150px",
                        float: "left"
                      }}
                    />
                    <div style={{ marginTop: 20 }}>
                      {item.brands.map(brands => {
                        if (
                          brands
                            .toLowerCase()
                            .includes(this.state.foundedTerm.trim()) ||
                          brands.includes(this.state.foundedTerm.trim())
                        )
                          return (
                            <Chip
                              variant="outlined"
                              label={`${brands}`}
                              className={classes.searchChips}
                            />
                          );
                      })}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </div></Dialog>
        )}
        {this.state.showMessage.length > 0 && (
          <div style={{ maxWidth: 1500, margin: "auto", padding: 20 }}>
            <Paper style={{ padding: 20 }}>
              <Typography>{this.state.showMessage}</Typography>
            </Paper>
          </div>
        )}

        {show &&
          category.map(item => (
            <div className={classes.carousel}>
              <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
                {item.name}
              </h2>
              <hr className={classes.divider} />
              <div className={classes.carousel}>
                <Grid container spacing={24}>
                  {item.subCategories.map(subcategory => (
                    <Grid item xs={12} sm={6} md={4}>
                      <Card
                        style={{ padding: 10, margin: 10 }}
                        className={classes.card}
                      >
                        <div>
                          <h3 style={{ textAlign: "center", fontWeight: 800, color: 'white' }}>
                            {subcategory.name}
                          </h3>
                          <div style={{ textAlign: "center" }}>
                            {subcategory.brands.map(brand => (
                              <Chip
                                color="primary"
                                label={`${brand}`}
                                className={classes.chip}
                                variant="outlined"
                                clickable
                                onClick={() => this.handleClick(brand)}
                              />
                            ))}
                          </div>
                        </div>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          ))}

        <Footer id="section5" />
      </div>
    );
  }
}

export default withStyles(styles)(Category);
