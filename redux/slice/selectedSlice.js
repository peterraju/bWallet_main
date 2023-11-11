import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTransaction: null,
};

export const selectedSlice = createSlice({
  name: "selected",
  initialState,

  reducers: {
    handleSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },
  },
});

export const { handleSelectedTransaction } = selectedSlice.actions;
