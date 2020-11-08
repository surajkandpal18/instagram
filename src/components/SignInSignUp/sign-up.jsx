import { Button, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import insta from '../../assets/instalogo.png'

const useStyle=makeStyles((theme)=>({
    signUpBox:{
        border:'1px solid grey',
        width:'22em',
        padding:'2em',
        backgroundColor:"#fff"
    },
    signUpButton:{
        textTransform:'none',
        color:'#fff',
        width:'18em',
        backgroundColor:'#2196f3',
    '&:hover':{ backgroundColor:'#03a9f4',
     }
    },

    inputBoxes:{
        width:'16em',
        padding:0
    }
}))

function SignUp() {
    const [login,setLogin]=useState({
        username:"",
        email:"",
        password:"",
        displayName:"",
    })
    const classes=useStyle();
    const history=useHistory();

    const handleChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    return (

       <Grid container direction='column' style={{height:'100%',width:'100%'}} justify='center' alignItems='center'>
       <Grid item container direction='column' className={classes.signUpBox} alignItems='center' spacing={2}>
        <Grid item>
       <img src={insta} alt='heading instagram' style={{width:'15em'}}/>
        </Grid>
       <Grid item>
        <TextField
          id="email"
          label="Email"
          name='email'
          variant='outlined'
          className={classes.inputBoxes}
          value={login.email}
          placeholder='Enter username here'
          onChange={handleChange}
          />
        </Grid>
        <Grid item>
        <TextField
          id="displayName"
          label="Display Name"
          name='displayName'
          variant='outlined'
          className={classes.inputBoxes}
          value={login.displayName}
          placeholder='Enter username here'
          onChange={handleChange}
          />
        </Grid>
        <Grid item>
        <TextField
          id="username"
          label="Username"
          name='username'
          variant='outlined'
          className={classes.inputBoxes}
          value={login.username}
          placeholder='Enter username here'
          onChange={handleChange}
          />
        </Grid>
        <Grid item>
        <TextField
          id="password"
          label="Password"
          name='password'
          variant='outlined'
          value={login.password}
          className={classes.inputBoxes}
          placeholder='Enter password here'
          onChange={handleChange}
          />
        </Grid>
        <Grid item>
        <Button variant="container" className={classes.signUpButton}>
         Sign Up
        </Button>
        <Divider style={{marginTop:'1em'}}/>
        </Grid>
        

        <Grid item>
        <Button variant="text" style={{textTransform:'none'}} >
          Forgot Password?
        </Button>
        
        </Grid>
        
        <Grid item container direction='column' alignItems='center' className={classes.loginBox} style={{marginTop:'1em'}}>
    
        <Typography variant="body 1" color="initial">
        Already have an account ? <span style={{color:'#2196f3',fontWeight:'bold',cursor:'pointer'}} onClick={()=>history.push('/login')}> Login</span>
        </Typography>
       </Grid>
        
        
       </Grid>
       
       </Grid>
    )
}

export default SignUp;
