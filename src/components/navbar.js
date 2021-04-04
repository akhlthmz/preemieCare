import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Paper,
  Tab,
  AppBar,
  Toolbar,
  Tabs,
  useScrollTrigger,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0.5em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    marginLeft: "30px",
    height: "2.5em",
    width: "4.5em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "15px",
      height: "1.8em",
      width: "3.2em",
    },
  },
  fixit: {
    margin: "0",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontWeight: 700,
    minWidth: 100,
    marginLeft: "25px",
  },
  DrawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "35px",
  },
  drawer: {
    backgroundColor: "rgb(217, 226, 226)",
  },
  drawerItem: {
    fontSize: "1.5em",
  },
  orange: {
    color: "white",
    backgroundColor: "purple",
  },
  container: {
    display: "inlineGrid",
    gridGap: "3px",
  },
  item: {
    display: " flex",
    justifyContent: " center",
    alignItems: "center",
    fontSize: "1em",
  },
}));

function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //To fix the indication tab on refresh
  const currentTab = () => {
    let path = window.location.pathname;
    if (path === "/") return 0;
    else if (path === "/about") return 1;
    else if (path === "/contact") return 2;
    else return 0;
  };

  const [value, setValue] = useState(currentTab);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const tabs = (
    <Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        <Tab component={Link} to="/" className={classes.tab} label="Home" />

     
      </Tabs>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        classes={{ paper: classes.drawer }}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 1}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 2}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact
            </ListItemText>
          </ListItem>
          
          
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.DrawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Paper elevation={10}>
            <Toolbar>
              <Link to="/" style={{ textDecoration: "none" }}>
                {/* <Grid container className={classes.container}>
                  <Grid item classname={classes.item}> */}
                {/* <img src={bear} className={classes.logo} alt="logo" /> */}
                {/* </Grid> */}
                  <Grid item className={classes.item}>
                    <h1>Preemie Care</h1>
                  </Grid>
                {/* </Grid> */}
              </Link>

              {matches ? drawer : tabs}
            </Toolbar>
          </Paper>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}





export default Navbar;