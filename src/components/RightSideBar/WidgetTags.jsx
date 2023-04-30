import React from "react";
import "./RightSideBar.css";

const WidgetTags = () => {
  let tags = [
    "javascript",
    "python",
    "c#",
    "java",
    "php",
    "html",
    "xml",
    "json",
    "xml",
    "css",
    "php",
    "sql",
    "mysql",
    "mongodb",
    "oracle",
    "mongodb",
    "redis",
  ];
  return (
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
