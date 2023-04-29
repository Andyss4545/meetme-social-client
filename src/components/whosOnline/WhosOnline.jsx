import React from "react";
import "../whosOnline/whosOnline.css";
import PersonImg from "../../Assets/person.jpg";

const WhosOnline = () => {
  return (
    <div className="whosOnline">
      <span className="whosOnlineTitle">Friends Online</span>

      <ul className="whosOnlineContainer">
        <li className="whosOnlineList">
          <div className="whosOnlineContent">
            <img className="whosOnlinePerson" src={PersonImg} alt="" />
            <span className="whosOnlinestatus"></span>
          </div>
          <span className="whosOnlineName">Akindele Omosebi</span>
        </li>

        <li className="whosOnlineList">
          <div className="whosOnlineContent">
            <img className="whosOnlinePerson" src={PersonImg} alt="" />
            <span className="whosOnlinestatus"></span>
          </div>
          <span className="whosOnlineName">Taiye Taiwo</span>
        </li>

        <li className="whosOnlineList">
          <div className="whosOnlineContent">
            <img className="whosOnlinePerson" src={PersonImg} alt="" />
            <span className="whosOnlinestatus"></span>
          </div>
          <span className="whosOnlineName">David Robert</span>
        </li>

        <li className="whosOnlineList">
          <div className="whosOnlineContent">
            <img className="whosOnlinePerson" src={PersonImg} alt="" />
            <span className="whosOnlinestatus"></span>
          </div>
          <span className="whosOnlineName">Angelina Jolie</span>
        </li>

        <li className="whosOnlineList">
          <div className="whosOnlineContent">
            <img className="whosOnlinePerson" src={PersonImg} alt="" />
            <span className="whosOnlinestatus"></span>
          </div>
          <span className="whosOnlineName">Temi Gomez</span>
        </li>
      </ul>
    </div>
  );
};

export default WhosOnline;
