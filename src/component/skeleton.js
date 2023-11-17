import React from "react";
import "./skeleton.css";

export default function skeleton(props) {
  return (
    <div
      className="skeleton-loader"
      style={{
        height: props.height ? props.height : "",
        width: props.width ? props.width : "",
        borderRadius: props.radius,
      }}
      {...props}
    ></div>
  );
}
