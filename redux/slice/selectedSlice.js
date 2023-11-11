import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTransaction: null,
  selectedContributors: [],
};

export const selectedSlice = createSlice({
  name: "selected",
  initialState,

  reducers: {
    handleSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },

    addSelectedContributor: (state, action) => {
      state.selectedContributors.push(action.payload);
    },

    removeSelectedContributor: (state, action) => {
      state.selectedContributors = state.selectedContributors.filter(
        (contributor) => contributor.id !== action.payload.id,
      );
    },

    clearSelectedContributors: (state) => {
      state.selectedContributors = [];
    },
  },
});

export const {
  handleSelectedTransaction,
  addSelectedContributor,
  removeSelectedContributor,
  clearSelectedContributors,
} = selectedSlice.actions;
