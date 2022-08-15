import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import TopArtists from "../../templates/TopArtists/TopArtists";

export default function TopArtistsPage() {
  const { topArtistsList } = useSelector((state) => state.infoApi);
  return (
    <div id="topArtistsPage">
      <TopArtists artistsArr={topArtistsList} imgStyle={{ objectFit: "cover" }} />
    </div>
  );
}
