import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types/types";

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: AuthState }) =>
  state.auth.accessToken;
