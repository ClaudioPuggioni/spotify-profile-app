import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { BASE64, AUTH_CODE_KEY, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN_KEY, DEV_ID } from "../utils/constants";

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: {
    auth: window.localStorage.getItem(AUTH_CODE_KEY),
    refreshToken: window.localStorage.getItem(REFRESH_TOKEN_KEY),
    accessToken: null,
    errorMessage: "",
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      if (action.payload) {
        state.errorMessage = "";
      }
    },
    clearAPI: (state, action) => {
      state.auth = window.localStorage.getItem(AUTH_CODE_KEY);
      state.refreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(testAuth.fulfilled, (state, action) => {
        state.loading = false;
        const { data, code, status, errorMessage } = action.payload;
        console.log("Code: ", code);
        if (status === 200) {
          console.log("entered!");
          state.auth = code;
          state.accessToken = data.access_token;
          state.refreshToken = data.refresh_token;
          window.localStorage.setItem(AUTH_CODE_KEY, code);
          window.localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
        } else {
          state.errorMessage = errorMessage;
        }
      })
      .addCase(testAuth.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(testAuth.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

const testAuth = createAsyncThunk("apiRedux/testAuth", async (code, thunkAPI) => {
  if (!code) {
    code = thunkAPI.getState().auth;
  }

  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      client_id: DEV_ID,
      client_secret: CLIENT_SECRET,
    }).toString(),
    headers: {
      Authorization: `Basic ${BASE64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  let data = await response.json();
  let repsonseObj = {
    data,
    code,
    status: response.status,
    errorMessage: response.error !== undefined ? response.error.message : "",
  };
  return repsonseObj;
});

const refreshAccessToken = createAsyncThunk("apiRedux/refreshAccessToken", async (_, thunkAPI) => {
  const refreshToken = thunkAPI.getState().refreshToken;

  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: `grant_type=resfresh_token&refresh_token=${refreshToken}&client_id=${DEV_ID}`,
    headers: {
      Authorization: `Basic ${Buffer.from(DEV_ID + ":" + CLIENT_SECRET).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  let data = await response.json();
  console.log("Finished Testing!", data);
  return null;
});

export { testAuth, refreshAccessToken };

export const { setAuth, setLoading, clearAPI } = apiSlice.actions;

export default apiSlice.reducer;
