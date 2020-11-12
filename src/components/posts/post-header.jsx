import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  myHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#fff",
    padding: "10px",
    width: "30em",
  },
}));
function PostHeader({ displayName, profilePic }) {
  const classes = useStyle();

  return (
    <div className={classes.myHeader}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Avatar alt={displayName} src={profilePic} size="small" />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Typography variant="subtitle1" color="initial">
            {displayName}
          </Typography>
        </div>
      </div>
      <div>
        <IconButton aria-label="" style={{ marginRight: "3px" }}>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default PostHeader;
