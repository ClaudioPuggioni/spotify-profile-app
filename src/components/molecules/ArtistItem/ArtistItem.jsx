import React from "react";
import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import Image from "../../atoms/Image/Image";

export default function ArtistItem({ src = "No image src here! - HBM", text = "No text here! - HBM", imgType = "No imgType here! - HBM", labelType = "No labelType here! - HBM", style = {} }) {
  return (
    <div className="artistItem">
      <Image imageName={src} type={imgType} />
      <AppLabel style={style} type={labelType}>
        {text}
      </AppLabel>
    </div>
  );
}
