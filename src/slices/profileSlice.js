import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileApi",
  initialState: { username: false, followers: 0, following: 0, playlistCount: 0, topArtistsList: false, topTracksList: false },
  extraReducers: {
    [getFollowersThunk.fulfilled]: (state, action) => {
      const [data, status] = action.payload;
      if (status === 200) {
        state.username = data.display_name;
        state.followers = data.followers.total;
      }
    },
    [getFollowersThunk.pending]: (state, action) => {},
    [getFollowersThunk.rejected]: (state, action) => {
      console.log(action.error);
    },
    [getFollowingThunk.fulfilled]: (state, action) => {
      const [data, status] = action.payload;
      if (status === 200) {
        state.following = data.total;
      }
    },
    [getFollowingThunk.pending]: (state, action) => {},
    [getFollowingThunk.rejected]: (state, action) => {
      console.log(action.error);
    },
    [getListCountThunk.fulfilled]: (state, action) => {
      const [data, status] = action.payload;
      if (status === 200) {
        state.playlistCount = data.total;
      }
    },
    [getListCountThunk.pending]: (state, action) => {},
    [getListCountThunk.rejected]: (state, action) => {
      console.log(action.error);
    },
    [getTopArtistsThunk.fulfilled]: (state, action) => {
      const [data, status] = action.payload;
      if (status === 200) {
        state.topArtistsList = data.items;
      }
    },
    [getTopArtistsThunk.pending]: (state, action) => {},
    [getTopArtistsThunk.rejected]: (state, action) => {
      console.log(action.error);
    },
    [getTopTracksThunk.fulfilled]: (state, action) => {
      const [data, status] = action.payload;
      if (status === 200) {
        state.topTracksList = data.items;
      }
    },
    [getTopTracksThunk.pending]: (state, action) => {},
    [getTopTracksThunk.rejected]: (state, action) => {
      console.log(action.error);
    },
  },
});

const followerUsernameURL = "https://api.spotify.com/v1/me";
const followingURL = "https://api.spotify.com/v1/me/following?type=artist";
const playlistCountURL = "https://api.spotify.com/v1/me/playlists";
const topListsURL = "https://api.spotify.com/v1/me/top/"; // call twice: once for artists, once for tracks

const getFollowersThunk = createAsyncThunk("profileApi/getFollowersThunk", async (access_token) => {
  let response = await fetch(followerUsernameURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  console.log("claudio follower arrived:", data);
  return [data, response.status];
});

const getFollowingThunk = createAsyncThunk("profileApi/getFollowingThunk", async (access_token) => {
  let response = await fetch(followingURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  console.log("claudio following arrived:", data);
  return [data, response.status];
});

const getListCountThunk = createAsyncThunk("profileApi/getListCountThunk", async (access_token) => {
  let response = await fetch(playlistCountURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  console.log("claudio playlist count arrived:", data);
  return [data, response.status];
});

const getTopArtistsThunk = createAsyncThunk("profileApi/getTopArtistsThunk", async (access_token) => {
  let response = await fetch(`${topListsURL}artists`, {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  console.log("claudio top artists arrived:", data);
  return [data, response.status];
});

const getTopTracksThunk = createAsyncThunk("profileApi/getTopTracksThunk", async (access_token) => {
  let response = await fetch(`${topListsURL}tracks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  console.log("claudio playlist count arrived:", data);
  return [data, response.status];
});

export { getFollowersThunk, getFollowingThunk, getListCountThunk, getTopArtistsThunk, getTopTracksThunk };

// export const {  } = profileSlice.actions;

export default profileSlice.reducer;
