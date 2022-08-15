import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import TopArtists from "../../templates/TopArtists/TopArtists";
import { switchFilter } from "../../../slices/infoSlice";

export default function TopArtistsPage() {
  const { topArtistsList_ALL, topArtistsList_6M, topArtistsList_4W, artistsSelect } = useSelector((state) => state.infoApi);
  const { isMobile } = useSelector((state) => state.dataLocker);
  const dispatch = useDispatch();
  return (
    <div id="topArtistsPage">
      <TopArtists
        artistsArr={artistsSelect === 0 ? topArtistsList_ALL : artistsSelect === 1 ? topArtistsList_6M : topArtistsList_4W}
        imgStyle={{ objectFit: "cover" }}
        col={isMobile ? true : false}
        selected={artistsSelect}
        onClick={(e) => {
          dispatch(switchFilter(["artists", e.target.innerText]));
        }}
      />
    </div>
  );
}
