import React from "react";
import ArtistItem from "../ArtistItem/ArtistItem";
import "./styles.css";

export default function ArtistList({ artistsArr = "artistsArr is missing - ALM", itemType = "row", style = {}, headerWithButton = true, button = false }) {
  return (
    <div className="artistList" style={style}>
      {artistsArr.length > 0
        ? artistsArr.map((ele, idx) => {
            return <ArtistItem itemType={itemType} src={ele.imageNameExt} children={ele.artistName} style={ele.style}></ArtistItem>;
          })
        : artistsArr}
    </div>
  );
}
