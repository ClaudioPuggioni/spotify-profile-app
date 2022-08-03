import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  testAuth,
  refreshAccessToken,
  setLoading,
} from "../../slices/apiSlice";
import { useSearchParams, useNavigate } from "react-router-dom";

import LoadingErrorPopUp from "../../components/organisms/ErrorPopUp/LoadingErrorPopUp";

export default function Validate() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { auth, refreshToken, accessToken, loading, errorMessage } =
    useSelector((state) => state.apiRedux);

  useEffect(() => {
    if (window.location.search.length > 0 && !auth &&!loading) {
      dispatch(testAuth(searchParams.get("code")));
      console.log("Testing the new Auth Code: ", searchParams.get("code"));
    } else if (!auth &&!loading) {
      navigator("/login");
    } else if (!refreshToken && !loading) {
      
      dispatch(testAuth());
      console.log("Refreshing the refresh token with this code: ", auth);
    } else if (!accessToken &&!loading) {
      console.log('refreshing ...');
      console.log(accessToken);
      dispatch(refreshAccessToken());
      console.log(
        "Refreshing the access token with this refresh token: ",
        refreshToken
      );
    } else if(!loading){
      navigator("/profile");
      // dispatch(setLoading(false));
    }
  }, [loading]);
  return (
    <LoadingErrorPopUp
      isLoading={loading}
      errorMessage={errorMessage}
      onCancel={() => {
        dispatch(setLoading(true));
      }}
    />
  );
}
