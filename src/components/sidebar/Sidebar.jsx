import React from "react";
import "../sidebar/sidebar.css";
import {
  People,
  CalendarMonth,
  Notifications,
  RssFeed,
  OndemandVideo,
} from "@mui/icons-material";
import FollowSidebar from "./FollowSidebar/FollowSidebar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <span className="sidebarTitle">Manage my Pages</span>
        <ul className="sidebarMenuList">
          <li className="sidebarListItem">
            <div className="sidebarListItemLeft">
              <RssFeed className="sidebarListIcon" />
              <span className="sidebarListTitle">Timeline</span>
            </div>
          </li>

          <li className="sidebarListItem">
            <div className="sidebarListItemLeft">
              <People className="sidebarListIcon" />
              <span className="sidebarListTitle">My Followers</span>
            </div>

            <span className="sidebarListItemRight">234</span>
          </li>

          <li className="sidebarListItem">
            <div className="sidebarListItemLeft">
              <Notifications className="sidebarListIcon" />
              <span className="sidebarListTitle">Notifications</span>
            </div>

            <span className="sidebarListItemRight">9</span>
          </li>

          <li className="sidebarListItem">
            <div className="sidebarListItemLeft">
              <OndemandVideo className="sidebarListIcon" />
              <span className="sidebarListTitle">Videos</span>
            </div>
          </li>

          <li className="sidebarListItem">
            <div className="sidebarListItemLeft">
              <CalendarMonth className="sidebarListIcon" />
              <span className="sidebarListTitle">Events</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebarFollow">
        <FollowSidebar />
      </div>
    </div>
  );
};

export default Sidebar;
