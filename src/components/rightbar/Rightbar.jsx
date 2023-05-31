import React from "react";
import "../rightbar/rightbar.css";
import PersonImg from "../../Assets/person.jpg";
import WhosOnline from "../whosOnline/WhosOnline";
import { Users } from "../../dataServices";
import { Link } from "react-router-dom";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarContainer">
          <div className="rightbarPhoto">
            <img
              className="rightbarCoverPhoto"
              src="https://wallpapers.net/clear-road-nature/download/2560x1440.jpg"
              alt=""
            />
            <Link to={"/myprofile"}>
              <img className="rightbarProfile" src={PersonImg} alt="" />
            </Link>
          </div>

          <div className="rightbarContent">
            <span className="rightbarTitle">Temitope Omosebi</span>
            <span className="rightbarDesc">
              Frontend Web Developer | ReactJS Expert | Software Adviser |
              Blockchain Expert | Frontend Web Developer @ UCHUB Technologies
              Limited
            </span>
          </div>

          <hr className="rightbarhr" />
          <div className="rightbarCounter">
            <div className="rightbarCounterContent">
              <span className="rightbarCount">80K</span>
              <span className="rightbarCountTitle">Followers</span>
            </div>

            <div className="rightbarCounterContent">
              <span className="rightbarCount">803K</span>
              <span className="rightbarCountTitle">Likes</span>
            </div>

            <div className="rightbarCounterContent">
              <span className="rightbarCount">1.4K</span>
              <span className="rightbarCountTitle">Posts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="whosOnlineWrpper">
        <span className="whosOnlineTitle">Friends Online</span>
        {Users.map((friend, index) => {
          return <WhosOnline key={index} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Rightbar;
