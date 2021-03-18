import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import { Button,InputLabel,Input,FormHelperText,Typography } from "@material-ui/core";

const Login = () => {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  return (
    <div className="login">
      <Typography variant="h3">Login</Typography>
        <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-email" value={email} onChange={ (e)=> {setEmail(e.target.value)} }/>
        <FormHelperText id="my-helper-email">We'll never share your email.</FormHelperText>
        <InputLabel htmlFor="my-password">Password</InputLabel>
        <Input id="my-password" aria-describedby="my-helper-pass" value={pass} onChange={ (e)=> {setPass(e.target.value)} } />
        <Button color="primary" variant="contained"> Submit </Button>
        </FormControl>
    </div>
  );
};

export default Login;