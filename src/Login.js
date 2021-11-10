import React from 'react';
import { Grid, Paper, Avatar, TextField, button } from '@material-ui/core';
import { Link ,  Redirect } from 'react-router-dom'; 




const Login=() =>{

    const paperStyle={padding:20 , height:'55vh', width: 280, margin:"50px auto"}
    const avatarStyle={backgroundColor:'green'}
    const buttonStyle={backgroundColor:'blue', color:'white',  width:'35vh',  padding:'9px',  margin:'3vh'}
    
    return(
        <Grid align="center">
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                     <Avatar style={avatarStyle}>H</Avatar>
                        <h2> Login </h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Password' placeholder='Enter your Password' type='password' fullWidth required />
                <button type="button"  style={buttonStyle}>Submit</button>
                <Link to="/Signup"> Go to a next page </Link>
            </Paper>
        </Grid>
    )
 }

 export default Login;