import React from "react";

import "../../App.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { Breakpoint } from "react-socks";
const Home = () => {
  return (
    <div className="home-container-1">
      <Breakpoint customQuery="(min-width:630px)">
        <LeftSideBar />
      </Breakpoint>

      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
