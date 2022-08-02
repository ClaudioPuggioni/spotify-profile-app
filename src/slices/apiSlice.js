import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { Buffer } from "buffer";

const dev_id = "6d9d2ada4edc4edbbaf9123d39707310";
const client_secret = "25c9a61a43954e85a98ca6613c4dedae";
const redirect_uri = "http://localhost:3000/";

const getAuth = () => {
  console.log("ping");
  const state = nanoid();
  const scope = "playlist-read-private user-top-read user-read-recently-played";
  return `https://accounts.spotify.com/authorize?client_id=${dev_id}&response_type=code&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
};

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: {
    isValid: false,
    auth: null,
    token: null,
    refresh_token: null,
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
        const [data,code,status] = action.payload;
        if (status === 200) {
          state.isValid = true;
          state.auth = code;
          state.token = data.access_token;
          state.refresh_token = data.refresh_token;
        }
      })
      .addCase(testAuth.pending, (state, action)=>{
        
      })
      .addCase(testAuth.rejected, (state, action) => {
        console.log(action.error);
        state.isValid = false;
        state.errorMessage = action.error.message;
      });
  },
});

const testAuth = createAsyncThunk("apiRedux/testAuth", async (code) => {
  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${dev_id}&client_secret=${client_secret}`,
    headers: {
      Authorization: `Basic ${Buffer.from(dev_id + ":" + client_secret).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  let data = await response.json();
  return [data,code,response.status];
});

export { getAuth, testAuth };

export const { setAuth, resetValid } = apiSlice.actions;

export default apiSlice.reducer;
