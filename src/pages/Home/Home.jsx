import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import HomeMainBar from "../../components/HomeMainbar/HomeMainBar";
import { Breakpoint } from "react-socks";
const Home = () => {
  return (
    <div className="home-container-1">
      <Breakpoint small up>
        <LeftSideBar />
      </Breakpoint>
      <div className="home-container-2">
        <HomeMainBar />
        <Breakpoint large up>
          <RightSideBar />
        </Breakpoint>
      </div>
    </div>
  );
};

export default Home;
