import React from "react";
import "./RightSideBar.css";
import Widgets from "./Widgets";
import WidgetTags from "./WidgetTags";
const RightSideBar = () => {
  return (
    <aside className="right-sidebar">
      <Widgets />
      <WidgetTags />
    </aside>
  );
};

export default RightSideBar;
