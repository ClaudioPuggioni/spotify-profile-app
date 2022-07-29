import React from "react";
import "./styles.css";

const TYPES = {
  LARGE: 1,
  MED: 2,
  SMALL: 3,
};

export default function Image({
  imageName = "default.jpg",
  isRounded = true,
  type = TYPES.SMALL,
}) {
  let SIZE = {};
  switch (type) {
    case TYPES.SMALL:
      SIZE = { width: "70px", height: "70px" };
      break;
    case TYPES.MED:
      SIZE = { width: "150px", height: "150px" };
      break;
    default:
      SIZE = { width: "250px", height: "250px" };
      break;
  }
  return (
    <img
      className={isRounded ? "rounded" : ""}
      src={require("../../../assets/" + imageName)}
      alt={imageName}
      style={{ ...SIZE }}
    />
  );
}
