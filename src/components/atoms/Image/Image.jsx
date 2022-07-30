import React from "react";
import { SCALE_EXTRAEXTRA_SMALL, SCALE_ALMOSTTINY, SCALE_TINY, SCALE_MEDLARGE, SCALE_LARGE, SCALE_MED, SCALE_SMALL, SCALE_ALMOSTEXTRA_SMALL, SCALE_EXTRA_SMALL } from "../../../styles/sizes";
import "./styles.css";

export const TYPES = {
  TINY: 7,
  ALMOSTTINY: 8,
  EXTRAEXTRA_SMALL: 9,
  EXTRA_SMALL: 4,
  ALMOSTEXTRA_SMALL: 6,
  SMALL: 3,
  MED: 2,
  MEDLARGE: 5,
  LARGE: 1,
};

export default function Image({ imageName = "default.jpg", isRounded = false, isBordered = false, type = TYPES.SMALL, style = {} }) {
  let SIZE = {};
  let scale = 0;
  let padding = 0;
  switch (type) {
    case TYPES.TINY:
      scale = SCALE_TINY;
      padding = 3;
      break;
    case TYPES.ALMOSTTINY:
      scale = SCALE_ALMOSTTINY;
      padding = 3;
      break;
    case TYPES.EXTRAEXTRA_SMALL:
      scale = SCALE_EXTRAEXTRA_SMALL;
      padding = 4;
      break;
    case TYPES.EXTRA_SMALL:
      scale = SCALE_EXTRA_SMALL;
      padding = 5;
      break;
    case TYPES.ALMOSTEXTRA_SMALL:
      scale = SCALE_ALMOSTEXTRA_SMALL;
      padding = 7;
      break;
    case TYPES.SMALL:
      scale = SCALE_SMALL;
      padding = 10;
      break;
    case TYPES.MED:
      scale = SCALE_MED;
      padding = 20;
      break;
    case TYPES.MEDLARGE:
      scale = SCALE_MEDLARGE;
      padding = 16;
      break;
    default:
      scale = SCALE_LARGE;
      padding = 30;
      break;
  }
  SIZE = { width: scale, height: scale };
  padding = isRounded & isRounded ? padding : 0;
  console.log("size is", SIZE);
  return <img className={(isRounded ? "rounded " : "") + (isBordered ? "bordered" : "")} src={require("../../../assets/" + imageName)} alt={imageName} style={{ ...style, ...SIZE, padding }} />;
}
