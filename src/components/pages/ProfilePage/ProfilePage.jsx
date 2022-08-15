import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../templates/Profile/Profile";
import { useNavigate } from "react-router-dom";
import { clearAPI } from "../../../slices/apiSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const goTo = useNavigate();
  const { username, profileStatusArr, userAvatarSrc, topArtistsList_ALL, topTracksList_ALL } = useSelector((state) => state.infoApi);

  return (
    <div id="profilePage">
      <Profile
        imageSrc={userAvatarSrc}
        username={username}
        profileStatusArr={profileStatusArr}
        artistsArr={topArtistsList_ALL}
        tracksArr={topTracksList_ALL}
        imgStyle={{ objectFit: "cover" }}
        onClick={() => {
          window.localStorage.clear();
          dispatch(clearAPI());
          goTo("/login");
        }}
      />
    </div>
  );
}
