import { AppBar, Avatar, makeStyles, TextField, Toolbar } from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import React from 'react'
import { useStateValue } from '../context/global-state';

const useStyles=makeStyles((theme)=>({
    toolbar:{
        ...theme.mixins.toolbar
    }
}))

function Header() {
    const [{user},dispatch]=useStateValue()
    const classes=useStyles()
    return (
        <React.Fragment>
        <AppBar  variant='fixed' elevation={1}>
        <Toolbar>
        <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='intsa-image'/>
        
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center'}}>
        <HomeRoundedIcon style={{marginRight:'0.5em',cursor:'pointer'}}/>
        <SendRoundedIcon style={{marginRight:'0.5em',cursor:'pointer'}}/>
        <ExploreRoundedIcon style={{marginRight:'0.5em',cursor:'pointer'}}/>
        <FavoriteRoundedIcon style={{marginRight:'0.5em',cursor:'pointer'}}/>
        <Avatar alt={user.name} src={user.profileImg}  style={{width:'1.5em' ,height:'1.5em',cursor:'pointer'}}/>
        </div>
        </Toolbar>
        
        </AppBar>
        <div className={classes.toolbar}/>
        </React.Fragment>
    )
}

export default Header
