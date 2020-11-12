import { Grid } from "@material-ui/core";
import React from "react";
import MainPost from "./main-post";

var myposts = [
  {
    displayName: "Test Name",
    profilePic: "some pic",
    caption: "this is my first post",
    content:
      "https://www.designyourway.net/blog/wp-content/uploads/2018/08/7374-beautiful-cute-wallpapers-1920x1080-768x432.jpg",
    comments: [],
  },
];
function PostFeed() {
  return (
    <Grid
      container
      direction="column"
      style={{
        width: "100vw",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      alignItems="center"
    >
      {myposts.map((item, index) => (
        <Grid item key={index}>
          <MainPost post={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostFeed;
