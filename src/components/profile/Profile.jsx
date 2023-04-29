import React from "react";
import "../profile/profile.css";
import Sidebar from "../sidebar/Sidebar";
import CoverImg from "../../Assets/coverPhoto.jpg";
import PersonImg from "../../Assets/person.jpg";
import { LocationOn } from "@mui/icons-material";
import { CalendarMonth, Edit, Add } from "@mui/icons-material";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileSidebar">
        <Sidebar />
      </div>
      <div className="profilemain">
        <div className="profileContainer">
          <div className="profileWrapper">
            <div className="profileImages">
              <img src={CoverImg} alt="" className="profileCoverImg" />
              <img src={PersonImg} alt="" className="profilePicture" />
            </div>

            <div className="profileSection">
              <div className="profileAbout">
                <div className="profileAboutMe">
                  <div className="profileAboutMeLeft">
                    <span className="profileName">Temitope Andrews</span>

                    <span className="profileDesc">
                      Frontend Web Developer | ReactJS Expert | Software Adviser
                      | Blockchain Expert | Frontend Web Developer @ UCHUB
                      Technologies Limited
                    </span>
                  </div>

                  <div className="profileAboutMeRight">
                    <div className="profileAddPostContent">
                      <Add className="profileAddIcon" />
                      <span className="profileAddPost">Add post</span>
                    </div>

                    <div className="profileEditContent">
                      <Edit className="profileEditIcon" />
                      <span className="profileEdit">Edit profile</span>
                    </div>
                  </div>
                </div>

                <div className="profileAboutBottom">
                  <div className="profileAboutLocation">
                    <LocationOn className="profileAboutIcon" />
                    <span>Lekki, Nigeria</span>
                  </div>

                  <div className="profileAboutTime">
                    <CalendarMonth className="profileAboutIcon" />
                    <span>Joined March 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profileAllDetailsWrapper">
          <div className="profileDetails">
            <span className="profileDetailsTitle">Country</span>
            <Edit className="profileDetailsEdit" />
            <div className="profileDetailsDesc">
              <span>Nigeria</span>
            </div>
          </div>
          <hr className="profileline" />

          <div className="profileDetails">
            <span className="profileDetailsTitle">City</span>
            <div className="profileDetailsDesc">
              <span>Lekki, Lagos</span>
            </div>
          </div>

          <hr className="profileline" />
          <div className="profileDetails">
            <span className="profileDetailsTitle">Relationship</span>
            <div className="profileDetailsDesc">
              <span>Male</span>
            </div>
          </div>

          <hr className="profileline" />

          <div className="profileDetails">
            <span className="profileDetailsTitle">Education</span>
            <div className="profileDetailsDesc">
              <span>Yaba College Of Technology</span>
            </div>
          </div>

          <hr className="profileline" />

          <div className="profileDetails">
            <span className="profileDetailsTitle">Language</span>
            <div className="profileDetailsDesc">
              <span>English</span>
            </div>
          </div>

          <hr className="profileline" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
