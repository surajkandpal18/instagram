import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import insta from "../../assets/instalogo.png";

const useStyle = makeStyles((theme) => ({
  signUpBox: {
    border: "1px solid grey",
    width: "22em",
    padding: "2em",
    backgroundColor: "#fff",
    [theme.breakpoints.down("xs")]: {
      width: "100%",

      borderWidth: 0,
    },
  },
  signUpButton: {
    textTransform: "none",
    color: "#fff",
    width: "18em",
    backgroundColor: "#2196f3",
    "&:hover": { backgroundColor: "#03a9f4" },
  },

  inputBoxes: {
    width: "16em",
    padding: 0,
  },
}));

function SignUp() {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
    displayName: "",
  });
  const classes = useStyle();
  const history = useHistory();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <Grid
      container
      direction="column"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: matchesXs ? "#fff" : "inherit",
      }}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        className={classes.signUpBox}
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <img src={insta} alt="heading instagram" style={{ width: "13em" }} />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            label="Email"
            name="email"
            variant="outlined"
            className={classes.inputBoxes}
            value={login.email}
            placeholder="Enter username here"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="displayName"
            label="Display Name"
            name="displayName"
            variant="outlined"
            className={classes.inputBoxes}
            value={login.displayName}
            placeholder="Enter username here"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="username"
            label="Username"
            name="username"
            variant="outlined"
            className={classes.inputBoxes}
            value={login.username}
            placeholder="Enter username here"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            name="password"
            variant="outlined"
            value={login.password}
            className={classes.inputBoxes}
            placeholder="Enter password here"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button variant="container" className={classes.signUpButton}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.signUpBox}
        style={{ marginTop: "1em" }}
      >
        <Typography variant="body 1" color="initial">
          Already have an account ?{" "}
          <span
            style={{ color: "#2196f3", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => history.push("/login")}
          >
            {" "}
            Login
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SignUp;
