import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataThunk } from "../../../slices/infoSlice";
import Profile from "../../templates/Profile/Profile";
import { FOLLOWER_USER_URL, FOLLOWING_URL, PLAYLIST_COUNT_URL, TOP_ARTISTS_URL, TOP_TRACKS_URL, RECENT_URL } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../../slices/apiSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const goTo = useNavigate();
  const { loading, username, profileStatusArr, userAvatarSrc, topArtistsList, topTracksList } = useSelector((state) => state.infoApi);

  useEffect(() => {
    dispatch(getDataThunk(FOLLOWER_USER_URL));
    dispatch(getDataThunk(FOLLOWING_URL));
    dispatch(getDataThunk(PLAYLIST_COUNT_URL));
    dispatch(getDataThunk(TOP_ARTISTS_URL));
    dispatch(getDataThunk(TOP_TRACKS_URL));
    dispatch(getDataThunk(RECENT_URL));
    // eslint-disable-next-line
  }, []);

  return (
    <div id="profilePage">
      <Profile
        imageSrc={userAvatarSrc}
        username={username}
        profileStatusArr={profileStatusArr}
        artistsArr={topArtistsList}
        tracksArr={topTracksList}
        imgStyle={{ objectFit: "cover" }}
        onClick={() => {
          window.localStorage.clear();
          dispatch(setLoading(false));
          goTo("/");
        }}
      />
    </div>
  );
}
