import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {Redirect,useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
// import {signin} from '../store/action/useraction'
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Signin() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const auth = useSelector((state) => state.user);
  console.log(JSON.parse(auth));
  const classes = useStyles();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  // useEffect(()=>{
  // console.log(auth)
  // },[auth])
  const LogIn = (e) => {
    e.preventDefault();
    localStorage.setItem(user);
    console.log(user);
  };
  // if (auth.token) return <Redirect to="/"></Redirect>
  return (
    <Card>
      <h1>SignIn</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <br></br>
        <Button onClick={() => LogIn()}>LogIn</Button>
        <Link to="/signup">
          <p>Signup</p>
        </Link>
      </form>
    </Card>
  );
}
