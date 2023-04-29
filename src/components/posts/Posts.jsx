import React, { useState } from "react";
import "../posts/posts.css";
import PersonImg from "../../Assets/person.jpg";
import PostImage from "../../Assets/postImage.jpeg";
import { MoreVert, ThumbUp, Comment, Share } from "@mui/icons-material";
import { Users } from "../../dataServices";

const Posts = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postAbout">
          <div className="postAboutLeft">
            <img
              className="postAboutLeftImg"
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postAboutLeftName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postAboutLeftTime">{post.date}</span>
          </div>

          <div className="postAboutRight">
            <MoreVert />
          </div>
        </div>

        <div className="postContent">
          <span className="postArticle">{post.desc}</span>
          <img className="postMainImg" src={post.photo} alt="" />
        </div>

        <div className="postActivity">
          <div className="postothers">
            <div className="postLikeOthers">
              <ThumbUp className="postLikeOtherscon" />
              <span>Clyslayde Santos and {like} others</span>
            </div>

            <div className="postCommentsOthers">
              <span className="postCommentNum">342</span>
              <span className="postCommentTitle">Comments</span>
            </div>
          </div>
          <hr className="postHr" />
          <div className="postActivityWarapper">
            <div className="postLike">
              <ThumbUp onClick={likeHandler} className="postActivityIcon" />
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
