import React from "react";
import "../rightbar/rightbar.css";
import PersonImg from "../../Assets/person.jpg";
import WhosOnline from "../whosOnline/WhosOnline";

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

            <img className="rightbarProfile" src={PersonImg} alt="" />
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
        <WhosOnline />
      </div>
    </div>
  );
};

export default Rightbar;
