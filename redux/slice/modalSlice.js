import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  contributprModal: false,
  activeWallet: null,
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

    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
    },
  },
});

export const { handleLoginModal, handleContributorModal, setActiveWallet } =
  modalSlice.actions;
