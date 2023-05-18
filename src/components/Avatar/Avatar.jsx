import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  cursor,
}) => {
  const style = {
    backgroundColor: backgroundColor,
    width: px,
    height: py,
    color: color || "black",
    borderRadius: borderRadius,
    fontSize: fontSize,
    cursor: cursor || null,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
