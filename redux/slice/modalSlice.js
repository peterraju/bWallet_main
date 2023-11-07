import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  contributorModal: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    handleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },

    handleContributorModal: (state) => {
      state.contributorModal = !state.contributorModal;
    },
  },
});

export const { handleLoginModal, handleContributorModal } = modalSlice.actions;
