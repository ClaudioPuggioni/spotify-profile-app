import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { FOLLOWER_USER_URL, FOLLOWING_URL, PLAYLIST_COUNT_URL, RECENT_URL, AUTH_CODE_KEY, TOP_ARTISTS_URL_ALLTIME, TOP_ARTISTS_URL_6MONTHS, TOP_ARTISTS_URL_4WEEKS, TOP_TRACKS_URL_4WEEKS, TOP_TRACKS_URL_6MONTHS, TOP_TRACKS_URL_ALLTIME } from "../utils/constants";

const infoSlice = createSlice({
  name: "infoApi",
  initialState: { loading: false, username: false, profileStatusArr: false, followers: 0, userAvatarSrc: false, following: 0, playlists: 0, playlistArr: false, topArtistsList_ALL: false, topArtistsList_6M: false, topArtistsList_4W: false, topTracksList_ALL: false, topTracksList_6M: false, topTracksList_4W: false, recentPlayedList: false, artistsSelect: 0, tracksSelect: 0 },
  reducers: {
    switchFilter: (state, action) => {
      const [type, selection] = action.payload;
      switch (selection) {
        case "Last 6 Months":
          if (type === "artists") state.artistsSelect = 1;
          if (type === "tracks") state.tracksSelect = 1;
          break;
        case "Last 4 Weeks":
          if (type === "artists") state.artistsSelect = 2;
          if (type === "tracks") state.tracksSelect = 2;
          break;
        default:
          if (type === "artists") state.artistsSelect = 0;
          if (type === "tracks") state.tracksSelect = 0;
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataThunk.fulfilled, (state, action) => {
        console.log("FULFILLED getDataThunk");
        state.loading = false;
        const [data, status, url] = action.payload;
        console.log("builder data:", data);

        if (status === 200) {
          console.log("status 200");
          function msConverter(ms) {
            let minutes = Math.floor(ms / 60000);
            let seconds = ((ms % 60000) / 1000).toFixed(0);
            return seconds === 60 ? minutes + 1 + "00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
          }
          if (url === FOLLOWER_USER_URL) {
            state.username = data.display_name;
            state.profileStatusArr = [
              { number: 0, label: "Followers" },
              { number: 0, label: "Following" },
              { number: 0, label: "Playlists" },
            ];
            state.profileStatusArr[0].number = data.followers.total;
            state.userAvatarSrc = data.images[0].url;
          }
          if (url === FOLLOWING_URL) {
            // state.following = data.artists.total;
            state.profileStatusArr[1].number = data.artists.total;
          }
          if (url === PLAYLIST_COUNT_URL) {
            // state.playlistArr = data.items;
            state.playlistArr = data.items.map((ele) => {
              return { imageSrc: ele.images[0].url, playlistTitle: ele.name, trackCount: ele.tracks.total };
            });
            // state.playlists = data.total;
            state.profileStatusArr[2].number = data.total;
          }
          if (url === TOP_ARTISTS_URL_ALLTIME) {
            state.topArtistsList_ALL = data.items.map((ele) => {
              return { imageSrc: ele.images[0].url, artistName: ele.name };
            });
          }
          if (url === TOP_ARTISTS_URL_6MONTHS) {
            state.topArtistsList_6M = data.items.map((ele) => {
              return { imageSrc: ele.images[0].url, artistName: ele.name };
            });
          }
          if (url === TOP_ARTISTS_URL_4WEEKS) {
            state.topArtistsList_4W = data.items.map((ele) => {
              return { imageSrc: ele.images[0].url, artistName: ele.name };
            });
          }
          if (url === TOP_TRACKS_URL_ALLTIME) {
            state.topTracksList_ALL = data.items.map((ele) => {
              return { imageSrc: ele.album.images[0].url, trackName: ele.name, artistName: ele.artists[0].name, albumName: ele.album.name, songLength: msConverter(ele.duration_ms) };
            });
          }
          if (url === TOP_TRACKS_URL_6MONTHS) {
            state.topTracksList_6M = data.items.map((ele) => {
              return { imageSrc: ele.album.images[0].url, trackName: ele.name, artistName: ele.artists[0].name, albumName: ele.album.name, songLength: msConverter(ele.duration_ms) };
            });
          }
          if (url === TOP_TRACKS_URL_4WEEKS) {
            state.topTracksList_4W = data.items.map((ele) => {
              return { imageSrc: ele.album.images[0].url, trackName: ele.name, artistName: ele.artists[0].name, albumName: ele.album.name, songLength: msConverter(ele.duration_ms) };
            });
          }
          if (url === RECENT_URL) {
            console.log("RECENT:", data.items);
            state.recentPlayedList = data.items.map((ele) => {
              return { imageSrc: ele.track.album.images[0].url, trackName: ele.track.name, artistName: ele.track.artists[0].name, albumName: ele.track.album.name, songLength: msConverter(ele.track.duration_ms) };
            });
          }
        }
        console.log("state is:", current(state));
        // console.log("state.username:", state.username);
        // console.log("state.followers:", state.followers);
        // console.log("state.userAvatarSrc:", state.userAvatarSrc);
        // console.log("state.following:", state.following);
        // console.log("state.playlists:", state.playlists);
        // console.log("state.playlistArr:", state.playlistArr);
        // console.log("state.topArtistsList:", state.topArtistsList);
        // console.log("state.topTracksList:", state.topTracksList);
        // console.log("state.recentPlayedList:", state.recentPlayedList);
      })
      .addCase(getDataThunk.pending, (state, action) => {
        console.log("PENDING getDataThunk");
        state.loading = true;
        console.log("loading");
      })
      .addCase(getDataThunk.rejected, (state, action) => {
        console.log("REJECTED getDataThunk");
        state.loading = false;
        state.errorMessage = action.error.message;
        console.log("rejected");
      });
  },
});

const getDataThunk = createAsyncThunk("infoApi/getDataThunk", async (url, api) => {
  const access_token = api.getState().apiRedux.accessToken;
  let response = await fetch(url, {
    method: "GET",
    // body: new URLSearchParams(body).toString(),
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  // console.log("claudio data arrived:", data);
  return [data, response.status, url];
});

export { getDataThunk };

export const { switchFilter } = infoSlice.actions;

export default infoSlice.reducer;
