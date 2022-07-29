import React from "react";
import { SCALE_LARGE, SCALE_MED, SCALE_SMALL } from "../../../styles/sizes";
import "./styles.css";

const TYPES = {
  LARGE: 1,
  MED: 2,
  SMALL: 3,
};

export default function Image({
  imageName = "default.jpg",
  isRounded = true,
  isBordered = false,
  type = TYPES.SMALL,
}) {
  let SIZE = {};
  switch (type) {
    case TYPES.SMALL:
      SIZE = { width: SCALE_SMALL, height: SCALE_SMALL };
      break;
    case TYPES.MED:
      SIZE = { width: SCALE_MED, height: SCALE_MED };
      break;
    default:
      SIZE = { width: SCALE_LARGE, height: SCALE_LARGE };
      break;
  }
  return (
    <img
      className={(isRounded ? "rounded" : "") + (isBordered ? "bordered" : "")}
      src={require("../../../assets/" + imageName)}
      alt={imageName}
      style={{ ...SIZE }}
    />
  );
}
