import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./custom_services/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
