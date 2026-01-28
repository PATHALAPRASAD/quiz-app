import { configureStore } from "@reduxjs/toolkit";

// ================================================================

import rootReducer from "../reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

// ================================================================

// import quizSlice from "../slices/quizSlice";

// export const store = configureStore({
//   reducer: {
//     quiz: quizSlice,
//   },

//   //   middleware: (getDefaultMiddleware) =>
//   //     getDefaultMiddleware({
//   //       serializableCheck: false,
//   //     }),
// });
