// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { postApi } from "./services/post";
// // import { usersReducer } from "./reducers/userSlice";
// // import usersReducer from "./reducers/userSlice";

// export const store = configureStore({
//   reducer: {
//     [postApi.reducerPath]: postApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(postApi.middleware),
// });
// setupListeners(store.dispatch);
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
