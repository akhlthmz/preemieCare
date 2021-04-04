import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Link }  from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  Button,
  FormControl,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
  Container,
  Grid,
  InputBase,
  withStyles,
  NativeSelect
} from "@material-ui/core";

const statusList = ["Male", "Female"];

const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      marginTop: "15px",
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
  
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "4rem",
    // paddingBottom: "8rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
 
}));

const Questions = () => {
  const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());

  const handleDateChangeFrom = (date) => {
    setSelectedDateFrom(date);
  };
  
  const classes = useStyles();
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        
        <Typography component="h1" variant="h5">
          Please Authenticate
        </Typography>
        <form
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Birth Weight (g)"
            name="projectName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Birth Length (cm)"
            name="projectName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Gestational age at birth"
            name="projectName"
          />
          <FormControl fullWidth>
            <NativeSelect
              input={<BootstrapInput />}
              fullWidth
              placeholder="Status"
            >
              <option value="Open">Gender</option>
              {statusList.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <h3>Date of birth</h3>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                name="from"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDateFrom}
                onChange={handleDateChangeFrom}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          
          <Link to="/home" style={{ textDecoration: 'none' }}>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#3cb371", color: "white" }}
            className={classes.submit}
          >
            Submit
          </Button>
          </Link>

        </form>
    </Container>
  );
};

export default Questions;