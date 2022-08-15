import React from "react";
import { useSelector } from "react-redux";
import Playlists from "../../templates/Playlists/Playlists";
import "./styles.css";

export default function PlaylistsPage() {
  const { playlistArr } = useSelector((state) => state.infoApi);
  return (
    <div id="playlistsPage">
      <Playlists playlistsArr={playlistArr} imgStyle={{ objectFit: "cover" }} />
    </div>
  );
}
