import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import insta from "../../assets/instalogo.png";
import { useStateValue } from "../context/global-state";
import { actionTypes } from "../context/reducer";
import { baseUrl } from "../utils/store";

const useStyle = makeStyles((theme) => ({
  loginBox: {
    border: "1px solid grey",
    width: "22em",
    padding: "2em",
    backgroundColor: "#fff",
  },
  loginButton: {
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

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [something, dispatch] = useStateValue();
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const classes = useStyle();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signIn = () => {
    setLoader(true);
    fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        let receivedata = await res.json();

        receivedata.errors.map((item) => console.log(item.msg));
        setLoader(false);
      })
      .then((data) => {
        console.log(data);
        let token = data.token;
        dispatch({
          type: actionTypes.SET_TOKEN,
          payload: token,
        });
        //  window.localStorage.setItem("token", JSON.stringify(token));
        fetch(`${baseUrl}/user/me`, {
          method: "GET",
          headers: {
            token: token,
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            if (res.status === 401) {
              console.log("authentication token error");
            }
            throw new Error("error has occured");
          })
          .then((data) => {
            dispatch({ type: actionTypes.SET_USER, payload: data });
            setLoader(false);
            window.localStorage.setItem("user", JSON.stringify(data));

            history.push("/");
          })
          .catch((err) => {
            console.log(err);
            setLoader(false);
          });
      })
      .catch((err) => {
        console.log("Network error has occured");
        setLoader(false);
      });
  };

  return (
    <Grid
      container
      direction="column"
      style={{ height: "100%", width: "100%" }}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        className={classes.loginBox}
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
            placeholder="Enter Email here"
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
          <Button
            variant="contained"
            className={classes.loginButton}
            onClick={signIn}
          >
            {loader === true ? (
              <CircularProgress style={{ color: "white" }} size={27} />
            ) : (
              "Log In"
            )}
          </Button>
          <Divider style={{ marginTop: "1em" }} />
        </Grid>

        <Grid item>
          <Button
            variant="text"
            style={{ textTransform: "none", color: "#00376b" }}
          >
            Forgot Password?
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.loginBox}
        style={{ marginTop: "1em" }}
      >
        <Typography variant="body1" color="initial">
          Don't have an account ?{" "}
          <span
            style={{
              color: "#2196f3",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => history.push("/signup")}
          >
            {" "}
            Sign Up
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
