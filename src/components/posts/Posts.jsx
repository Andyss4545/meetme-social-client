import React from "react";
import "../posts/posts.css";
import PersonImg from "../../Assets/person.jpg";
import PostImage from "../../Assets/postImage.jpeg";
import { MoreVert, ThumbUp, Comment, Share } from "@mui/icons-material";

const Posts = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postAbout">
          <div className="postAboutLeft">
            <img className="postAboutLeftImg" src={PersonImg} alt="" />
            <span className="postAboutLeftName">Temitope Omosebi</span>
            <span className="postAboutLeftTime">5 mings ago</span>
          </div>

          <div className="postAboutRight">
            <MoreVert />
          </div>
        </div>

        <div className="postContent">
          <span className="postArticle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            officiis quisquam eligendi corrupti? Deleniti, pariatur! Quae
            pariatur beatae voluptates doloribus modi consectetur nobis?
          </span>
          <img className="postMainImg" src={PostImage} alt="" />
        </div>

        <div className="postActivity">
          <div className="postothers">
            <div className="postLikeOthers">
              <ThumbUp className="postLikeOtherscon" />
              <span>Clyslayde Santos and 3 others</span>
            </div>

            <div className="postCommentsOthers">
              <span className="postCommentNum">342</span>
              <span className="postCommentTitle">Comments</span>
            </div>
          </div>
          <hr className="postHr" />
          <div className="postActivityWarapper">
            <div className="postLike">
              <ThumbUp className="postActivityIcon" />
              <span>Like</span>
            </div>

            <div className="postLike">
              <Comment className="postActivityIcon" />
              <span>Comment</span>
            </div>

            <div className="postLike">
              <Share className="postActivityIcon" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
