import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./styles.css";

export default function TracksList({ imageSrc = false, tracksArr = "tracksArr is missing - TLM", imgStyle = [], listStyle = {}, itemStyle = {} }) {
  return (
    <div className="tracksList" style={listStyle}>
      {tracksArr.length > 0
        ? tracksArr.map((ele, idx) => {
            return <TrackItem key={`TrackItem${idx}`} imageSrc={ele.imageSrc} imageNameExt={ele.imageNameExt} trackName={ele.trackName} artistName={ele.artistName} albumName={ele.albumName} songLength={ele.songLength} itemStyle={itemStyle} imgStyle={imgStyle}></TrackItem>;
          })
        : tracksArr}
    </div>
  );
}
