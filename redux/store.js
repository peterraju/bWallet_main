"use client";

import { configureStore } from "@reduxjs/toolkit";

import { modalSlice } from "@/redux/slice/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
