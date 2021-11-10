import React from 'react';
import { Grid, Paper, Avatar, TextField,  button  } from '@material-ui/core';
import { Link ,  Redirect } from 'react-router-dom'; 

const paperStyle={padding:20 , height:'90vh', width: 320, margin:"30px auto"}
const avatarStyle={backgroundColor:'orange'}
 const buttonStyle={backgroundColor:'blue',color:'white', width:'35vh', padding:'9px', margin:'3vh'}


const Signup = () =>{

    // }
    // valid(){
    //  if(!this.state.username && this.state.password.length<5)
    //  {
    //    this.setState({ usernameError:"Envalid username",passwordError:"Password length should be more than 5"})
    //  }

    //     if(!this.state.email=="admin@gmail.com") 
    //     {
    //         this.setState({  emailError:"Envalid email id" )}
            
    //         localStorage.setItem("name","Anjali Rahate");
    //         localStorage.setItem("userid",)%

    //     // }
    // //     if(! this.state.confirmPassword)
    // //     {
    // //         this.setState({confirmPasswordError:"password should be match" })
    // //     }
             
    //  }

   
    // submit(){
    //      if(this.valid()){
    // console.log("")
    //      }
    // }
    // handleChange(e) {
    //     e.preventDefault()
    //     this.setState({
    //         [e.target.name] : e.target.value,
    //         [e.target.password] : e.target.value,
    //         [e.target.confirmPassword] : e.target.value,
    //         [e.target.email] : e.target.value,
    //         [e.target.username] : e.target.value,

    //     })
    //     console.log(e.target.name, e.target.value, 'e')
    // }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                     <Avatar style={avatarStyle}>H</Avatar>
                        <h2> Sign up </h2>
                </Grid>

                <TextField label='Fullname' name="fullname" placeholder='Enter Fullname' fullWidth  required />
                         {/* <p style={{color:"red", fontSize:"14px"}}>{this.state.fullnameError }</p>  */}
        
                        
                <TextField label='Password' placeholder='Enter your Password' type='password' fullWidth required />
                    {/* <p style={{color:"red", fontSize:"14px"}}>{this.state. passwordError}</p> */}
             

                <TextField label='Confirm Password' placeholder='Enter your confirm Password' type='password' fullWidth required />
                    {/* <p style={{color:"red", fontSize:"14px"}}>{this.state.confirmPasswordError}</p> */}

                <TextField label='Email' placeholder='Enter your Email' type='email'  fullWidth required />
                   {/* <p style={{color:"red", fontSize:"14px"}}>{this.state.emailError}</p> */}

                <TextField label='Username' placeholder='Enter Username' fullWidth required />
                    {/* <p style={{color:"red", fontSize:"14px"}}>{this.state.usernameError}</p> */}

                <button type="button"  style={buttonStyle} >Submit</button>
                <Link to="/Home"> Go to a next page </Link>
            
            </Paper>
        </Grid>
    )
 }


 export default Signup;