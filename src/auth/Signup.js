import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
// import {signup} from '../store/action/useraction'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useHistory } from "react-router-dom";
import Select from "@mui/material/Select";
// import { Redirect, useHistory } from "react-router-dom";
//import { AddUser } from "../store/action/useraction";
import "../css/login.css"

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

export default function SignUp() {
  /*
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.user);
  const [role, setrole] = React.useState("");

  const handleChange = (event) => {
    setrole(event.target.value);
  };
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    age: role,
  });
  const handleChanges = () => {
    console.log("signup");
    dispatch(AddUser(user));
  };
  if (auth.name) return history.push('/book')
  */

  return (
    <Card className="form-holder s-f">
      <form className="login-form">
      <h1>SignUP</h1>
        <TextField
          id="standard-basic"
          label="Name"
          value={"user.name"}
          onChange={(e) => setuser({ ...user, name: e.target.value })}
        />
        <br />
        <TextField
          id="standard-basic1"
          label="Email"
          value={"user.email"}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        />
        <br></br>
        <TextField
          id="standard-basic2"
          label="Password"
          value={"user.password"}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"role"}
            label="Role"
            onChange={() => handleChange()}
          >
            <MenuItem value={"users"}>User</MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"operators"}>Operator</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button variant="contained" onClick={() => handleChanges()}>SignUp</Button>
      </form>
    </Card>
  );
}
