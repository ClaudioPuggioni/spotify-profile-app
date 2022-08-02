import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BASE64, {
  ACCESS_TOKEN_KEY,
  AUTH_CODE_KEY,
  CLIENT_SECRET,
  REDIRECT_URI,
} from "../utils/constants";

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: {
    auth: window.localStorage.getItem(AUTH_CODE_KEY),
    access_token: window.localStorage.getItem(ACCESS_TOKEN_KEY),
    refresh_token: window.localStorage.getItem(REFRESH_TOKEN_KEY),
    errorMessage: "",
    loading: false,
  },
  reducers: {
    resetValid: (state, action) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(testAuth.fulfilled, (state, action) => {
        state.loading = false;
        const [data, code, response] = action.payload;
        if (response.status === 200) {
          state.auth = code;
          state.access_token = data.access_token;
          state.refresh_token = data.refresh_token;
          window.localStorage.setItem(AUTH_CODE_KEY, code);
          window.localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
        } else {
          state.errorMessage = response.error.message;
        }
      })
      .addCase(testAuth.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(testAuth.rejected, (state, action) => {
        state.loading = false;
        console.error(action.error);
        state.errorMessage = action.error.message;
      });
  },
});

const testAuth = createAsyncThunk("apiRedux/testAuth", async (code) => {
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
  return [data, code, response];
  console.log("Finished Testing!", data);
  return [data, code, response.status];
});

const refreshAuth = createAsyncThunk("apiRedux/testAuth", async (refreshToken) => {
  let response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: `grant_type=resfresh_token&refresh_token=${refreshToken}&client_id=${dev_id}`,
    headers: {
      Authorization: `Basic ${Buffer.from(dev_id + ":" + client_secret).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  let data = await response.json();
  console.log("Finished Testing!", data);
  return [data, response.status];
});

export { getAuth, testAuth };

export const { setAuth, resetValid } = apiSlice.actions;

export default apiSlice.reducer;
