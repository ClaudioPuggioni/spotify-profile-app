import React from "react";
import "./styles.css";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import {
  SECONDARY,
  PRIMARY,
  SPOTIFYBLACK,
  SPOTIFYWHITE,
  GREY,
} from "../../../styles/colors";

export default function ToolbarTab({
  selected = false,
  imageName = "user.png",
  text = "No text here - TTM",
}) {
  const imageArr = imageName.split(".");
  const selectedStr = selected ? "selected" : "";
  const image = imageArr[0] + selectedStr + "." + imageArr[1];
  return (
    <div
      style={
        selected
          ? { backgroundColor: PRIMARY, borderColor: SECONDARY }
          : { backgroundColor: SPOTIFYBLACK }
      }
      className={`toolbar-tab-cont ${selectedStr}`}
    >
      <Image imageName={image} type={IMAGE_TYPES.EXTRA_SMALL} />
      <AppLabel
        style={selected ? { color: SPOTIFYWHITE } : { color: GREY }}
        isBold
        type={TYPES.PAR}
      >
        {text}
      </AppLabel>
    </div>
  );
}
