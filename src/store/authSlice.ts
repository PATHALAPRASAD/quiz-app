// store/authSlice.ts (using Redux Toolkit)
import { createSlice } from "@reduxjs/toolkit";

type AuthSliceInitialStateType = {
  isAuthenticated: boolean;
  role: string;
  user: any;
};

const initialState: AuthSliceInitialStateType = {
  isAuthenticated: false,
  role: "USER",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state: any, action: { payload: boolean }) => {
      state.isAuthenticated = action.payload;
    },
    logoutAction: (state: any, action: { payload: boolean }) => {
      state.isAuthenticated = action.payload;
    },
    roleAction: (state: any, action: { payload: string }) => {
      state.role = action.payload;
    },
    userAction: (state: any, action: { payload: number }) => {
      state.user = action.payload;
    },
  },
});

export const { loginAction, logoutAction, roleAction, userAction } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
