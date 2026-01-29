// store/quizSlice.js (using Redux Toolkit)
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type QuizSliceInitialStateType = {
  isLoggedIn: boolean;
  role: string;
  users: any[];
  questions: any[];
  selectedQuizId: number;
  selectedQuizQuestions: any[];
};

const initialState: QuizSliceInitialStateType = {
  // isAuthenticated: false,
  // user: null,

  isLoggedIn: false,
  role: "USER",
  users: [],
  questions: [],
  selectedQuizId: -1,
  selectedQuizQuestions: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    loginAction: (state: any, action: { payload: boolean }) => {
      // state.isAuthenticated = true;
      // state.user = action.payload;

      state.isLoggedIn = action.payload;
    },
    logoutAction: (state: any, action: { payload: boolean }) => {
      // state.isAuthenticated = false;
      // state.user = null;

      state.isLoggedIn = action.payload;
    },

    usersAction: (state: any, action: { payload: [] }) => {
      state.users = action.payload;
    },
    roleAction: (state: any, action: { payload: string }) => {
      state.role = action.payload;
    },
    selectedQuizIdAction: (state: any, action: { payload: number }) => {
      state.selectedQuizId = action.payload;
    },
    selectedQuizQuestionsAction: (state: any, action: { payload: any }) => {
      state.selectedQuizQuestions = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login2.fulfilled, (state: any, action: any) => {})
      .addCase(login2.rejected, (state: any, action: any) => {})
      .addCase(login2.pending, (state: any, action: any) => {})
      // .addMatcher(login.settled, (state: any, action: any) => {})
      .addCase(logout2.fulfilled, (state: any, action: any) => {})
      .addCase(logout2.rejected, (state: any, action: any) => {})
      .addCase(logout2.pending, (state: any, action: any) => {});
    // .addMatcher(logout2.settled, (state: any, action: any) => {});
  },
});

export const {
  loginAction,
  logoutAction,
  roleAction,
  usersAction,
  selectedQuizIdAction,
  selectedQuizQuestionsAction,
} = quizSlice.actions;

export default quizSlice.reducer;

// ============================================================
// First, create the thunk
const login2 = createAsyncThunk(
  "users/login2",
  async (userId: number, thunkAPI) => {
    // const response = await userAPI.fetchById(userId)
    // return response.data
  },
);
const logout2 = createAsyncThunk(
  "users/logout2",
  async (userId: number, thunkAPI) => {
    // const response = await userAPI.fetchById(userId)
    // return response.data
  },
);
