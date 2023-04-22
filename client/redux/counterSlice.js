import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton: "send",
  activeSection: "portfolio",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveButton, setActiveSection } = counterSlice.actions;

export default counterSlice.reducer;
