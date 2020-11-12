import {
  AppBar,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import React from "react";
import { useStateValue } from "../context/global-state";
import { actionTypes } from "../context/reducer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: actionTypes.SET_USER, payload: null });
    dispatch({ type: actionTypes.SET_TOKEN, payload: null });
    window.localStorage.clear();
    history.push("/login");
  };
  return (
    <React.Fragment>
      <AppBar variant="fixed" elevation={1}>
        <Toolbar>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="intsa"
          />

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HomeRoundedIcon
              style={{ marginRight: "0.5em", cursor: "pointer" }}
            />
            <SendRoundedIcon
              style={{ marginRight: "0.5em", cursor: "pointer" }}
            />
            <ExploreRoundedIcon
              style={{ marginRight: "0.5em", cursor: "pointer" }}
            />
            <FavoriteRoundedIcon
              style={{ marginRight: "0.5em", cursor: "pointer" }}
            />
            <Avatar
              alt={user.displayName}
              src={user.profilePic}
              style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
              onClick={handleClick}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BookmarkBorderOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Saved" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CachedOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Switch Account" />
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={(e) => {
            handleLogout();
            handleClose();
          }}
        >
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Header;
