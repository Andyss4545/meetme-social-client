import React from "react";
import "../createPost/createPost.css";
import Person from "../../Assets/person.jpg";
import { Link } from "react-router-dom";
import {
  InsertPhoto,
  SmartDisplay,
  LocationOn,
  Share,
} from "@mui/icons-material";

const CreatePost = () => {
  return (
    <div className="createPost">
      <div className="createPostWrapper">
        <div className="createPostTop">
          <Link to={"/profile"}>
            <img src={Person} alt="" className="createPostImg" />
          </Link>

          <input
            type="text"
            placeholder="What's on your mind?"
            className="createPostInput"
          />
        </div>
        <hr />
        <div className="createPostBottom">
          <div className="createPostLeft">
            <div className="createPostBox">
              <InsertPhoto className="createPostIcon  photoIcon" />
              <span className="createPostTitle">Photo</span>
            </div>

            <div className="createPostBox">
              <SmartDisplay className="createPostIcon videoIcon" />
              <span className="createPostTitle">Video</span>
            </div>

            <div className="createPostBox">
              <LocationOn className="createPostIcon locationIcon" />
              <span className="createPostTitle">Location</span>
            </div>
          </div>

          <div className="createPostRight">
            <Share className="shareIcon" />
            <span className="createPostTitle shareTitle">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
