import React from 'react';
import { Grid } from '@material-ui/core';
import {Link , Redirect} from 'react-router-dom';

const Logout=() =>{
return(
    
        <Grid align="center">
        <h1> You have been logout.. </h1>
        <Link to="/"> Login again </Link>
        </Grid>

    )
 }

 export default Logout;
