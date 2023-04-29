import React from "react";
import "../whosOnline/whosOnline.css";
import PersonImg from "../../Assets/person.jpg";

const WhosOnline = ({ friend }) => {
  return (
    <div className="whosOnline">
      <ul className="whosOnlineContainer">
        <li className="whosOnlineList">
          <div className="whosOnlineContent">
            <img
              className="whosOnlinePerson"
              src={friend.profilePicture}
              alt=""
            />
            <span className="whosOnlinestatus"></span>
          </div>
          <span className="whosOnlineName">{friend.username}</span>
        </li>
      </ul>
    </div>
  );
};

export default WhosOnline;
