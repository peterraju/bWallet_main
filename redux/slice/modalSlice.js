import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  contributprModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    handleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },

    handleContributorModal: (state) => {
      state.contributprModal = !state.contributprModal;
    },
  },
});

export const { handleLoginModal, handleContributorModal } = modalSlice.actions;
