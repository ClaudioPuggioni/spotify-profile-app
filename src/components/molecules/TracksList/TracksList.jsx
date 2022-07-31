import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./styles.css";

export default function TracksList({ tracksArr = "tracksArr is missing - TLM", listStyle = {}, itemStyle = {} }) {
  return (
    <div className="tracksList" style={listStyle}>
      {tracksArr.length > 0
        ? tracksArr.map((ele) => {
            return <TrackItem imageNameExt={ele.imageNameExt} trackName={ele.trackName} artistName={ele.artistName} albumName={ele.albumName} songLength={ele.songLength} itemStyle={itemStyle}></TrackItem>;
          })
        : tracksArr}
    </div>
  );
}
