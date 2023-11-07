import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signature: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setSignature: (state, action) => {
      state.signature = action.payload;
    },
  },
});

export const { setSignature } = walletSlice.actions;
