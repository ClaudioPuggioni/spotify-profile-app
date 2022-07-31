import React from "react";
import "./styles.css";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SECONDARY, PRIMARY, SPOTIFYBLACK, SPOTIFYWHITE, GREY } from "../../../styles/colors";

export default function ToolbarTab({ selected = false, imageName = "", text = "No text here - TTM" }) {
  const selectedStr = selected ? "selectedToolbarTab" : "";
  return (
    <div style={selected ? { backgroundColor: PRIMARY, borderColor: SECONDARY } : { backgroundColor: SPOTIFYBLACK }} className={`toolbar-tab-cont ${selectedStr}`}>
      <Image imageName={imageName} type={IMAGE_TYPES.ALMOSTTINY} />
      <AppLabel style={selected ? { color: SPOTIFYWHITE, fontSize: "8.5px" } : { color: GREY, fontSize: "8.5px" }} isBold type={TYPES.PAR}>
        {text}
      </AppLabel>
    </div>
  );
}
