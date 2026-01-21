import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice.js";
import propertySlice from "../redux/propertySlice.js";
import leadSlice from "../redux/leadSlice.js";
import notificationSlice from "../redux/notificationSlice.js";
import favoriteSlice from "../redux/favoriteSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    properties: propertySlice,
    leads: leadSlice,
    notifications: notificationSlice,
    favorites: favoriteSlice,
  },
});
