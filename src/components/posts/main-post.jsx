import { Card, CardContent } from "@material-ui/core";
import React from "react";
import PostComments from "./post-comments";
import PostContent from "./post-content";
import PostHeader from "./post-header";
import PostToolbar from "./post-toolbar";

function MainPost({ post }) {
  const { displayName, profilePic, comments, content, caption } = post;
  return (
    <Card style={{ width: "30em", border: "1px solid gray" }}>
      <PostHeader displayName={displayName} profilePic={profilePic} />
      <PostContent content={content} />
      <PostToolbar caption={caption} />
      <PostComments displayName={displayName} comments={comments} />
    </Card>
  );
}

export default MainPost;
