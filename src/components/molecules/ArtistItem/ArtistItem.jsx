import React from "react";
import "./styles.css";
import AppLabel from "../../atoms/AppLabel/AppLabel";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function ArtistItem({ itemType = "No artist item type here! - AIM", imageNameExt = "No image src here! - AIM", children = "No text here! - AIM", style = {} }) {
  return (
    <div className={itemType === "col" ? "artistItem artistItemCol" : "artistItem artistItemRow"}>
      <Image imageName={imageNameExt} type={itemType === "col" ? IMAGE_TYPES.MEDLARGE : IMAGE_TYPES.SMALL} isRounded />
      <AppLabel style={{ color: SPOTIFYWHITE, fontSize: itemType === "col" ? "16px" : "14px" }} type={"TYPES.SUB_SUB_TITLE"} isBold>
        {children}
      </AppLabel>
    </div>
  );
}
