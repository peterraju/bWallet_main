import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  contributorModal: false,
  roleModal: false,
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
      state.contributorModal = !state.contributorModal;
    },

    handleRoleModal: (state) => {
      state.roleModal = !state.roleModal;
    },

    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
    },
  },
});

export const {
  handleLoginModal,
  handleContributorModal,
  setActiveWallet,
  handleRoleModal,
} = modalSlice.actions;
