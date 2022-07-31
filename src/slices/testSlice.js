import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// const URLAuth = "https://accounts.spotify.com/authorize?";
// // const URLRecent = "https://api.spotify.com/v1/me/player/recently-played";
// const getAuth = createAsyncThunk("apiRedux/fetchAuth", async () => {
//   const client_id = "6d9d2ada4edc4edbbaf9123d39707310";
//   const redirect_uri = "http://localhost:3000/";
//   const state = nanoid();
//   const scope = "playlist-read-private user-top-read user-read-recently-played";
//   const client_secret = "25c9a61a43954e85a98ca6613c4dedae";
//   //, Authorization: "Basic " + Buffer(client_id + ":" + client_secret).toString("base64")
//   console.log("ping");
//   const response = await fetch(URLAuth, {
//     method: "GET",
//     mode: "cors",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ Origin: redirect_uri, response_type: "code", client_id: client_id, scope: scope, redirect_uri: redirect_uri, state: state }),
//   });
//   console.log("pong");
//   const data = await response.json();
//   console.log(data);
//   window.location.href = URLAuth;
// });

// // const URLRecent = "https://api.spotify.com/v1/me/player/recently-played";
// const getAuth = createAsyncThunk("apiRedux/fetchAuth", async () => {
//   const client_id = "6d9d2ada4edc4edbbaf9123d39707310";
//   const redirect_uri = "http://localhost:3000/";
//   const state = nanoid();
//   const scope = "playlist-read-private user-top-read user-read-recently-played";
//   const client_secret = "25c9a61a43954e85a98ca6613c4dedae";
//   //, Authorization: "Basic " + Buffer(client_id + ":" + client_secret).toString("base64")
//   console.log("ping");
//   let URLAuth = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
//   const response = await fetch(URLAuth, {});
//   const data = await response.json();
//   console.log(data);
//   window.location.href = URLAuth;
// });

// const URLRecent = "https://api.spotify.com/v1/me/player/recently-played";
const getAuth = createAsyncThunk("apiRedux/fetchAuth", async () => {
  const client_id = "6d9d2ada4edc4edbbaf9123d39707310";
  const redirect_uri = "http://localhost:3000/";
  const state = nanoid();
  const scope = "playlist-read-private user-top-read user-read-recently-played";
  const client_secret = "25c9a61a43954e85a98ca6613c4dedae";
  //, Authorization: "Basic " + Buffer(client_id + ":" + client_secret).toString("base64")
  console.log("ping");
  let URLAuth = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
  const response = await fetch(URLAuth, {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  console.log("pong");

  //   const data = await response.json();
  //   console.log(data);
  window.location.replace(URLAuth, "_blank");
});

const toolbarData = [
  { fileNameExt: "profileIcon.svg", name: "profile" },
  { fileNameExt: "topArtistsIcon.svg", name: "top artists" },
  { fileNameExt: "topTracksIcon.svg", name: "top tracks" },
  { fileNameExt: "recentIcon.svg", name: "recent" },
  { fileNameExt: "playlistsIcon.svg", name: "playlists" },
];

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: { auth: null, token: null, authLoading: false, toolbarInputs: toolbarData },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: {
    [getAuth.pending]: (state, action) => {
      //   state.token = action.payload;
      state.authLoading = true;
      console.log("Load is pending");
    },
    [getAuth.fulfilled]: (state, action) => {
      //   state.token = action.payload;
      state.authLoading = false;
      console.log("Load is complete:", action.payload);
    },
    [getAuth.rejected]: (state, action) => {
      //   state.token = action.payload;
      state.authLoading = false;
      console.log("REJECTED", action.payload);
    },
  },
});

export { getAuth };

export const { setAuth } = apiSlice.actions;

export default apiSlice.reducer;
