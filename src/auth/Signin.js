import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {Redirect,useHistory} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import {signin} from '../store/action/useraction'
import { useEffect } from "react";
import "../css/login.css";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
*/

export default function Signin() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const auth = useSelector((state) => state.user);
  //console.log(JSON.parse(auth));
  //const classes = useStyles();
  /*
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  
  
   useEffect(()=>{
   console.log(auth)
   },[auth])
  const LogIn = (e) => {
    e.preventDefault();
    localStorage.setItem(user);
    console.log(user);
  };
  */
  
  // if (auth.token) return <Redirect to="/"></Redirect>
  return (
    <Card className="form-holder l-f">
      <form className="login-form">
      <h1>SignIn</h1> 
        <TextField
        id="standard-basic"
          label="Email"
          value={"user.email"}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          value={"user.password"}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <br></br>
        <Button  variant="contained" onClick={() => LogIn()}>LogIn</Button>
        
        {//<Link to="/signup"> <p>Signup</p></Link>
        }
      
      </form>
    </Card>
  );
}
