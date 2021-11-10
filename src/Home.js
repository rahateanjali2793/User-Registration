import React from 'react';
import { Grid } from '@material-ui/core';
import { Link ,  Redirect } from 'react-router-dom';

const Home=() =>{
return(
    <Grid align="center">
        <h1> Hello, I am a Home Page. </h1>
            <Link to="/Logout">Logout</Link>


        </Grid>

    )
 }

 export default Home;
