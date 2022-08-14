import React from "react";
import { useSelector } from "react-redux";
import Playlists from "../../templates/Playlists/Playlists";

export default function PlaylistsPage() {
  const { playlistArr } = useSelector((state) => state.infoApi);
  return (
    <div id="playlistsPage">
      {console.log(playlistArr)}
      <Playlists playlistsArr={playlistArr} imgStyle={{ objectFit: "cover" }} />
    </div>
  );
}
