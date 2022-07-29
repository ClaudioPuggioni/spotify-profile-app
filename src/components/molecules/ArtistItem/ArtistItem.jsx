import React from "react";
import "./styles.css";
import AppLabel from "../../atoms/AppLabel/AppLabel";
import Image, { TYPES } from "../../atoms/Image/Image";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function ArtistItem({ itemType = "No artist item type here! - AIM", src = "No image src here! - AIM", children = "No text here! - AIM", style = {} }) {
  return (
    <div className={itemType === "col" ? "artistItem col" : "artistItem row"}>
      <Image imageName={src} type={itemType === "col" ? TYPES.MEDLARGE : TYPES.SMALL} isRounded />
      <AppLabel style={{ color: SPOTIFYWHITE, fontSize: itemType === "col" ? "16px" : "14px" }} type={"TYPES.SUB_SUB_TITLE"} isBold>
        {children}
      </AppLabel>
    </div>
  );
}
