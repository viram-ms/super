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
import Dialog from '@material-ui/core/Dialog'
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
    maxWidth: 1200,
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

        {show && (
          <div style={{}} id="section4">
            <div style={{background: 'rgb(74,232,142)', background: 'linear-gradient(90deg, rgba(74,232,142,1) 1%, rgba(88,98,153,1) 45%, rgba(233,161,83,1) 100%)' }}>
              <div style={{padding: 50}} >
                <p
                  style={{
                    margin: 0,
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontSize: "2.2rem",
                    color: "white",
                    fontWeight: 550,
                    fontFamily: "Poppins, sans-serif"
                  }}
                >
                  {title} 
                </p>
              </div>
            </div>
            <Grid container>
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
            </Grid>
          </div>
        )}
        {this.state.searching && (
          <CircularProgress className={classes.progressCircular} />
        )}

        {subCategory.length > 0 && (
           <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open} width="md">
          <div style={{ maxWidth: 1200, margin: "auto", padding: 20 }}>
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
          <div style={{ maxWidth: 1200, margin: "auto", padding: 20 }}>
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
