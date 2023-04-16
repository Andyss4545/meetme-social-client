import React from "react";
import "../feed/feed.css";
import CreatePost from "../createPost/CreatePost";
import Posts from "../posts/Posts";

const Feed = () => {
  return (
    <div className="feed">
      <CreatePost />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Feed;
