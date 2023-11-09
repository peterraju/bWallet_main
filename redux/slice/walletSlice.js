import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signature: null,
  safe: "0x1dBA01d7519f3CD18cBdF2B207CC3D261eEadeF3",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setSignature: (state, action) => {
      state.signature = action.payload;
    },
    setSafe: (state, action) => {
      state.safe = action.payload;
    },
  },
});

export const { setSignature, setSafe } = walletSlice.actions;
