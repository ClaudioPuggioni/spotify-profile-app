import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { Buffer } from "buffer";

const dev_id = "6d9d2ada4edc4edbbaf9123d39707310";
const client_secret = "25c9a61a43954e85a98ca6613c4dedae";

const getAuth = () => {
  const dev_id = "6d9d2ada4edc4edbbaf9123d39707310";
  const redirect_uri = "http://localhost:3000/";
  const state = nanoid();
  const scope = "playlist-read-private user-top-read user-read-recently-played";
  const client_secret = "25c9a61a43954e85a98ca6613c4dedae";
  console.log("ping");
  return `https://accounts.spotify.com/authorize?client_id=${dev_id}&response_type=code&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
};

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: {
    isValid: false,
    auth: null,
    token: null,
    authLoading: false,
    errorMessage: "",
  },
  reducers: {
    resetValid: (state, action) => {
      state.isValid = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(testAuth.fulfilled, (state, action) => {
        const [status, code] = action.payload;
        if (status === 200) {
          state.isValid = true;
          state.auth = code;
        }
      })
      .addCase(testAuth.rejected, (state, action) => {
        console.log(action.error);
        state.isValid = false;
        state.errorMessage = action.error.message;
      });
  },
});

const testAuth = createAsyncThunk("apiRedux/testAuth", async (code) => {
  let response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer "+code,
    },
  });
  let data = await response.json();
  console.log("Finished Testing!", data);
  return [response.status, code];
});

export { getAuth, testAuth };

export const { setAuth, resetValid } = apiSlice.actions;

export default apiSlice.reducer;
