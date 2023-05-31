import React, { useEffect, useState } from "react";
import "../posts/posts.css";
import PersonImg from "../../Assets/person.jpg";
import PostImage from "../../Assets/postImage.jpeg";
import { MoreVert, ThumbUp, Comment, Share } from "@mui/icons-material";
import getUser from "../../services/userService";
import profileAvatar from "../../Assets/avatar.jpg";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Posts = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsliked] = useState(false);
  const [user, setUser] = useState([]);
  console.log("posts", post);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      await getUser.userList(post.userId).then((response) => {
        console.log("user", response.data.user);
        setUser(response.data.user);
      });
    };

    fetchUser();
  }, []);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postAbout">
          <div className="postAboutLeft">
            <Link to={`/profile/${post.userId}`}>
              <img
                className="postAboutLeftImg"
                src={user.profilePicture || profileAvatar}
                alt=""
              />
            </Link>
            <span className="postAboutLeftName">
              {user.firstname} {user.lastname}
            </span>
            <span className="postAboutLeftTime">{format(post.createdAt)}</span>
          </div>

          <div className="postAboutRight">
            <MoreVert />
          </div>
        </div>

        <div className="postContent">
          <span className="postArticle">{post.desc}</span>
          <img className="postMainImg" src={post.image} alt="" />
        </div>

        <div className="postActivity">
          <div className="postothers">
            <div className="postLikeOthers">
              <ThumbUp className="postLikeOtherscon" />
              <span>Clyslayde Santos and {like} others</span>
            </div>

            <div className="postCommentsOthers">
              <span className="postCommentNum">{post.comments.length}</span>
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
