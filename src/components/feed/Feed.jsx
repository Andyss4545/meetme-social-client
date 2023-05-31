import React, { useEffect, useState } from "react";
import "../feed/feed.css";
import axios from "axios";
import CreatePost from "../createPost/CreatePost";
import Posts from "../posts/Posts";
import getPosts from "../../services/postService";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5500/api/posts/timeline/6429a0049a3debe88e9bf842"
        );
        console.log("post", response.data);
        setPosts(response.data);
      } catch (error) {
        setPosts(error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <CreatePost />

      {posts?.map((post, index) => {
        return <Posts key={index} post={post} />;
      })}
    </div>
  );
};

export default Feed;
