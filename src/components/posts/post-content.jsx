import React from "react";

function PostContent({ content }) {
  return (
    <div style={{ width: "100%" }}>
      <img src={content} style={{ width: "100%" }} />
    </div>
  );
}

export default PostContent;
