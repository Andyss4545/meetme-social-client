import React from "react";
import "../feed/feed.css";
import CreatePost from "../createPost/CreatePost";
import Posts from "../posts/Posts";
import { posts } from "../../dataServices";

const Feed = () => {
  return (
    <div className="feed">
      <CreatePost />

      {posts.map((post, index) => {
        return <Posts key={index} post={post} />;
      })}
    </div>
  );
};

export default Feed;
