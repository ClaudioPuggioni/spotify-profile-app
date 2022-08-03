import { nanoid } from "nanoid";
import { Buffer } from "buffer";

export const DEV_ID = "6d9d2ada4edc4edbbaf9123d39707310";
export const CLIENT_SECRET = "25c9a61a43954e85a98ca6613c4dedae";
export const REDIRECT_URI = "http://localhost:3000/";
export const BASE64 = Buffer.from(DEV_ID + ":" + CLIENT_SECRET).toString(
  "base64"
);

export const getAuthLink = () => {
  const state = nanoid();
  const scope = "playlist-read-private user-top-read user-read-recently-played";
  return `https://accounts.spotify.com/authorize?client_id=${DEV_ID}&response_type=code&scope=${scope}&redirect_uri=${REDIRECT_URI}&state=${state}`;
};

//KEYS
export const REFRESH_TOKEN_KEY = "refresh_token";
export const AUTH_CODE_KEY = "auth_code";
