import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testAuth, refreshAccessToken, setLoading } from "../../slices/apiSlice";
import { useSearchParams, useNavigate } from "react-router-dom";
import LoadingErrorPopUp from "../../components/organisms/ErrorPopUp/LoadingErrorPopUp";
import { getDataThunk } from "../../slices/infoSlice";
import { FOLLOWER_USER_URL, FOLLOWING_URL, PLAYLIST_COUNT_URL, RECENT_URL, TOP_ARTISTS_URL_4WEEKS, TOP_ARTISTS_URL_6MONTHS, TOP_ARTISTS_URL_ALLTIME, TOP_TRACKS_URL_4WEEKS, TOP_TRACKS_URL_6MONTHS, TOP_TRACKS_URL_ALLTIME } from "../../utils/constants";

export default function Validate() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { auth, refreshToken, accessToken, loading, errorMessage } = useSelector((state) => state.apiRedux);

  useEffect(() => {
    if (window.location.search.length > 0 && !auth && !loading) {
      dispatch(testAuth(searchParams.get("code")));
      console.log("Testing the new Auth Code: ", searchParams.get("code"));
    } else if (!auth && !loading) {
      navigator("/login");
    } else if (!refreshToken && !loading) {
      dispatch(testAuth());
      console.log("Refreshing the refresh token with this code: ", auth);
    } else if (!accessToken && !loading) {
      console.log("refreshing ...");
      console.log(accessToken);
      dispatch(refreshAccessToken());
      console.log("Refreshing the access token with this refresh token: ", refreshToken);
    } else if (!loading) {
      [FOLLOWER_USER_URL, FOLLOWING_URL, PLAYLIST_COUNT_URL, RECENT_URL, TOP_ARTISTS_URL_ALLTIME, TOP_ARTISTS_URL_6MONTHS, TOP_ARTISTS_URL_4WEEKS, TOP_TRACKS_URL_ALLTIME, TOP_TRACKS_URL_6MONTHS, TOP_TRACKS_URL_4WEEKS].map((ele) => dispatch(getDataThunk(ele)));
      navigator("/profile");
    }
    // eslint-disable-next-line
  }, [loading]);
  return (
    <>
      {console.log("auth", auth, "refreshToken", refreshToken, "accessToken", accessToken)}
      <LoadingErrorPopUp
        isLoading={loading}
        errorMessage={errorMessage}
        onCancel={() => {
          dispatch(setLoading(true));
        }}
      />
    </>
  );
}
