import React from "react";
import "../FollowSidebar/followSidebar.css";
import PersonImg from "./../../../Assets/person.jpg";
import { Add, Person } from "@mui/icons-material";

const FollowSidebar = () => {
  return (
    <div className="followSidebar">
      <ul className="followSidebarList">
        <li className="followSidebarListItem">
          <img className="followSidebarItemImg" src={PersonImg} alt="" />
          <div className="followSidebarItemContent">
            <div className="followSidebarAbout">
              <span className="followSidebarItemName">Danny Mclean</span>
              <span className="followSidebarItemAbout">Web Developer</span>
            </div>

            <div className="followSidebarMain">
              <div className="followSidebarDesc">
                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Posts</span>
                  <span className="followSidebarPostNum">41</span>
                </div>

                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Followers</span>
                  <span className="followSidebarPostNum">345</span>
                </div>
              </div>
            </div>

            <div className="followSidebarbuttons">
              <div className="followSidebarbtnView">
                <Person className="followSidebarIcon" />
                Profile
              </div>
              <button className="followSidebarbtnFollow">
                <Add className="followSidebarIcon" />
                Follow
              </button>
            </div>
          </div>
        </li>

        <li className="followSidebarListItem">
          <img className="followSidebarItemImg" src={PersonImg} alt="" />
          <div className="followSidebarItemContent">
            <div className="followSidebarAbout">
              <span className="followSidebarItemName">Danny Mclean</span>
              <span className="followSidebarItemAbout">Web Developer</span>
            </div>

            <div className="followSidebarMain">
              <div className="followSidebarDesc">
                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Posts</span>
                  <span className="followSidebarPostNum">41</span>
                </div>

                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Followers</span>
                  <span className="followSidebarPostNum">345</span>
                </div>
              </div>
            </div>

            <div className="followSidebarbuttons">
              <div className="followSidebarbtnView">
                {" "}
                <Person className="followSidebarIcon" />
                Profile
              </div>
              <button className="followSidebarbtnFollow">
                <Add className="followSidebarIcon" />
                Follow
              </button>
            </div>
          </div>
        </li>

        <li className="followSidebarListItem">
          <img className="followSidebarItemImg" src={PersonImg} alt="" />
          <div className="followSidebarItemContent">
            <div className="followSidebarAbout">
              <span className="followSidebarItemName">Danny Mclean</span>
              <span className="followSidebarItemAbout">Web Developer</span>
            </div>

            <div className="followSidebarMain">
              <div className="followSidebarDesc">
                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Posts</span>
                  <span className="followSidebarPostNum">41</span>
                </div>

                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Followers</span>
                  <span className="followSidebarPostNum">345</span>
                </div>
              </div>
            </div>

            <div className="followSidebarbuttons">
              <div className="followSidebarbtnView">
                <Person className="followSidebarIcon" /> Profile
              </div>
              <button className="followSidebarbtnFollow">
                <Add className="followSidebarIcon" />
                Follow
              </button>
            </div>
          </div>
        </li>

        <li className="followSidebarListItem">
          <img className="followSidebarItemImg" src={PersonImg} alt="" />
          <div className="followSidebarItemContent">
            <div className="followSidebarAbout">
              <span className="followSidebarItemName">Danny Mclean</span>
              <span className="followSidebarItemAbout">Web Developer</span>
            </div>

            <div className="followSidebarMain">
              <div className="followSidebarDesc">
                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Posts</span>
                  <span className="followSidebarPostNum">41</span>
                </div>

                <div className="followSidebarPosts">
                  <span className="followSidebarPostTitle">Followers</span>
                  <span className="followSidebarPostNum">345</span>
                </div>
              </div>
            </div>

            <div className="followSidebarbuttons">
              <div className="followSidebarbtnView">
                <Person className="followSidebarIcon" /> Profile
              </div>
              <button className="followSidebarbtnFollow">
                <Add className="followSidebarIcon" />
                Follow
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FollowSidebar;
