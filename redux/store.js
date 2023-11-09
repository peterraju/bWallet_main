"use client";

import { configureStore } from "@reduxjs/toolkit";

import { modalSlice } from "@/redux/slice/modalSlice";
import { walletSlice } from "@/redux/slice/walletSlice";
import { tlbankSlice } from "@/redux/slice/tlbankSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    wallet: walletSlice.reducer,
    tlbank: tlbankSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
