import React from "react";
import "./styles.css";
import AppLabel from "../../atoms/AppLabel/AppLabel";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function ArtistItem({ imageSrc = false, itemType = "No artist item type here! - AIM", imageNameExt = "No image src here! - AIM", children = "No text here! - AIM", imgStyle = [], labelStyle = {} }) {
  return (
    <div className={itemType === "col" ? "artistItem artistItemCol" : "artistItem artistItemRow"}>
      <Image imageSrc={imageSrc} imageName={imageNameExt} type={itemType === "col" ? IMAGE_TYPES.MEDLARGE : IMAGE_TYPES.SMALL} isRounded imgStyle={imgStyle} />
      <AppLabel style={{ ...labelStyle, color: SPOTIFYWHITE, fontSize: "13px", fontWeight: "500" }} type={"TYPES.SUB_SUB_TITLE"}>
        {children}
      </AppLabel>
    </div>
  );
}
