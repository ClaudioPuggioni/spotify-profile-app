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
        state.loading = false;
        const [data, status, url] = action.payload;
        if (status === 200) {
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
            state.profileStatusArr[1].number = data.artists.total;
          }
          if (url === PLAYLIST_COUNT_URL) {
            state.playlistArr = data.items.map((ele) => {
              return { imageSrc: ele.images[0].url, playlistTitle: ele.name, trackCount: ele.tracks.total };
            });
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
            state.recentPlayedList = data.items.map((ele) => {
              return { imageSrc: ele.track.album.images[0].url, trackName: ele.track.name, artistName: ele.track.artists[0].name, albumName: ele.track.album.name, songLength: msConverter(ele.track.duration_ms) };
            });
          }
        }
        // console.log("state is:", current(state));
      })
      .addCase(getDataThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

const getDataThunk = createAsyncThunk("infoApi/getDataThunk", async (url, api) => {
  const access_token = api.getState().apiRedux.accessToken;
  let response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
  });
  let data = await response.json();
  return [data, response.status, url];
});

export { getDataThunk };

export const { switchFilter } = infoSlice.actions;

export default infoSlice.reducer;
