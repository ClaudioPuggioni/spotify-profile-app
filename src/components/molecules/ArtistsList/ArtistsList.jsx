import React from "react";
import ArtistItem from "../ArtistItem/ArtistItem";
import "./styles.css";

export default function ArtistsList({ imageSrc = false, artistsArr = "artistsArr is missing - ALM", itemType = "row", imgStyle = [], listStyle = {}, labelStyle = {} }) {
  return (
    <div className="artistList" style={{ ...listStyle, flexDirection: itemType === "row" ? "column" : "row" }}>
      {artistsArr.length > 0
        ? artistsArr.map((ele, idx) => {
            return <ArtistItem key={`ArtistItem${idx}`} imageSrc={ele.imageSrc} itemType={itemType} imageNameExt={ele.imageNameExt} children={ele.artistName} labelStyle={labelStyle} imgStyle={imgStyle} />;
          })
        : artistsArr}
    </div>
  );
}
