import React from "react";
import { useSelector } from "react-redux";
import TopTracks from "../../templates/TopTracks/TopTracks";

export default function TopTracksPage() {
  const { topTracksList } = useSelector((state) => state.infoApi);
  return (
    <div id="topTracksPage">
      <TopTracks tracksArr={topTracksList} imgStyle={{ objectFit: "cover" }} />
    </div>
  );
}
