import { createSlice } from "@reduxjs/toolkit";

const toolbarData = [
  { fileNameExt: "profileIcon.svg", name: "profile", linkName: "profile" },
  { fileNameExt: "topArtistsIcon.svg", name: "top artists", linkName: "topartists" },
  { fileNameExt: "topTracksIcon.svg", name: "top tracks", linkName: "toptracks" },
  { fileNameExt: "recentIcon.svg", name: "recent", linkName: "recent" },
  { fileNameExt: "playlistsIcon.svg", name: "playlists", linkName: "playlists" },
];

const dataSlice = createSlice({
  name: "dataLocker",
  initialState: { toolbarInputs: toolbarData, currTab: "profile", isMobile: false },
  reducers: {
    setTab: (state, action) => {
      state.currTab = action.payload;
    },
    setMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setTab, setMobile } = dataSlice.actions;

export default dataSlice.reducer;
