import React from "react";

import "../../App.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSidebar from "../../components/RightSideBar/RightSideBar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainBar";
import { Breakpoint } from "react-socks";

const Questions = ({ slideIn, handleSlideIn }) => {
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

export default Questions;
