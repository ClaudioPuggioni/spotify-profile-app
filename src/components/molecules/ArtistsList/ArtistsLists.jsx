import React from "react";
import ArtistItem from "../ArtistItem/ArtistItem";
import "./styles.css";

export default function ArtistsList({ artistsArr = "artistsArr is missing - ALM", itemType = "row", listStyle = {}, itemStyle = {} }) {
  return (
    <div className="artistList" style={{ ...listStyle, flexDirection: itemType === "row" ? "column" : "row" }}>
      {artistsArr.length > 0
        ? artistsArr.map((ele) => {
            return <ArtistItem itemType={itemType} imageNameExt={ele.imageNameExt} children={ele.artistName} style={itemStyle}></ArtistItem>;
          })
        : artistsArr}
    </div>
  );
}
