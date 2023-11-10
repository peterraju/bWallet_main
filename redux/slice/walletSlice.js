import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signature: null,
  safe: "0x1dBA01d7519f3CD18cBdF2B207CC3D261eEadeF3",
  balance: [0, 0, 0],
  safeName: "Bankless Design Treasury",
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
    setBalance: (state, action) => {
      state.balance[action.payload.index] = action.payload.value;
    },
    setSafeName: (state, action) => {
      state.safeName = action.payload;
    },
  },
});

export const { setSignature, setSafe, setBalance, setSafeName } =
  walletSlice.actions;
