import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton: "send",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { setActiveButton } = counterSlice.actions;

export default counterSlice.reducer;
