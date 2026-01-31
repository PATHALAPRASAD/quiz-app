// store/quizSlice.ts (using Redux Toolkit)
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type QuizSliceInitialStateType = {
  questions: any[];
  selectedQuizId: number;
  selectedQuizQuestions: any[];
  allQuizIds: any[];
  allQuizCategories: any[];
};

const initialState: QuizSliceInitialStateType = {
  questions: [],
  selectedQuizId: -1,
  selectedQuizQuestions: [],
  allQuizIds: [],
  allQuizCategories: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectedQuizIdAction: (state: any, action: { payload: number }) => {
      state.selectedQuizId = action.payload;
    },
    selectedQuizQuestionsAction: (state: any, action: { payload: any }) => {
      state.selectedQuizQuestions = action.payload;
    },
    allQuizIdsAction: (state: any, action: { payload: any }) => {
      state.allQuizIds = action.payload;
    },
    allQuizCategoriesAction: (state: any, action: { payload: any }) => {
      state.allQuizCategories = action.payload;
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
  selectedQuizIdAction,
  selectedQuizQuestionsAction,
  allQuizIdsAction,
  allQuizCategoriesAction,
} = quizSlice.actions;

export const quizReducer = quizSlice.reducer;

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
