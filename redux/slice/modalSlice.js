import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    openLoginModal: (state) => {
      state.loginModal = true;
    },

    closeLoginModal: (state) => {
      state.loginModal = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions;
