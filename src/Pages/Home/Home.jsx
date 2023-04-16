import React from "react";
import "../Home/home.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
      <Navbar />
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
