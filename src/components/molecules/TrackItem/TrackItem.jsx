import React from "react";
import "./styles.css";
import AppLabel from "../../atoms/AppLabel/AppLabel";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import { GREY, SPOTIFYWHITE } from "../../../styles/colors";

// Note: left at 100% width to fit list containers.

export default function TrackItem({ imageNameExt = "No image src here! - TIM", trackName = "No track name here! - TIM", artistName = "No artist name here! - TIM", albumName = "No album name here! - TIM", songLength = "No song length here! - TIM", itemStyle = {} }) {
  return (
    <div className="trackItem" style={itemStyle}>
      <div className="trackItemLeft">
        <Image imageName={imageNameExt} type={IMAGE_TYPES.ALMOSTEXTRA_SMALL} />
        <div className="trackMeta">
          <AppLabel style={{ color: SPOTIFYWHITE, fontSize: "15.5px", fontWeight: "500" }} type={"TYPES.SUB_SUB_TITLE"}>
            {trackName}
          </AppLabel>
          <AppLabel style={{ color: GREY, fontSize: "13.5px", fontWeight: "500" }} type={"TYPES.SUB_SUB_TITLE"}>
            {artistName + " • " + albumName}
          </AppLabel>
        </div>
      </div>
      <div className="trackItemRight">
        <AppLabel style={{ color: GREY, fontSize: "13.5px", fontWeight: "500" }} type={"TYPES.SUB_SUB_TITLE"}>
          {songLength}
        </AppLabel>
      </div>
    </div>
  );
}
