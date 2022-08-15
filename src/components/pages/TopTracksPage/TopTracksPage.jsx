import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import TopTracks from "../../templates/TopTracks/TopTracks";
import { switchFilter } from "../../../slices/infoSlice";

export default function TopTracksPage() {
  const { topTracksList_ALL, topTracksList_6M, topTracksList_4W, tracksSelect } = useSelector((state) => state.infoApi);
  const dispatch = useDispatch();
  return (
    <div id="topTracksPage">
      <TopTracks
        tracksArr={tracksSelect === 0 ? topTracksList_ALL : tracksSelect === 1 ? topTracksList_6M : topTracksList_4W}
        imgStyle={{ objectFit: "cover" }}
        selected={tracksSelect}
        onClick={(e) => {
          dispatch(switchFilter(["tracks", e.target.innerText]));
        }}
      />
    </div>
  );
}
