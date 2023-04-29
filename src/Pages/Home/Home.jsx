import React from "react";
import "../Home/home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <div className="homeWrapper">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
