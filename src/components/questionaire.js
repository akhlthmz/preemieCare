import React, { Fragment } from "react";
import homeView from "../imgs/undraw.svg";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import Question from './questions'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#1976d2",
      color: "white",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  btn: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    // [theme.breakpoints.down("md")]: {
    //   width: "7rem",
    //   height: "2.5rem",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "5rem",
    //   height: "2rem",
    // },
  },
  fontFamily: {
    fontFamily: "Helvetica Neue",
  },
  gridItem: {
    placeSelf: "center",
  },
  img: {
    width: "35rem",
    height: "45rem",
    [theme.breakpoints.down("sm")]: {
      width: "25rem",
      height: "35rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      height: "18rem",
    },
  },
}));

function Welcome() {
  const classes = useStyles();


  

  const gridNormal = (
    <Fragment>
      <Grid container spacing={10} justify="center" direction="row">
        <Grid item className={classes.gridItem}>
            <Question/>   
        </Grid>
        <Grid item className={classes.gridItem}>
          <img src={homeView} alt="home" className={classes.img} />
        </Grid>
      </Grid>
    </Fragment>
  );
  return <div>{gridNormal}</div>;
}



export default Welcome;