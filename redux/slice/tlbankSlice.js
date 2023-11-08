import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contributors: [],
  status: "ORG",
};

export const tlbankSlice = createSlice({
  name: "tlbank",
  initialState,

  reducers: {
    setContributors: (state, action) => {
      state.contributors = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    addContributor: (state, action) => {
      state.contributors.push(action.payload);
    },
  },
});

export const { setContributors, setStatus, addContributor } =
  tlbankSlice.actions;
