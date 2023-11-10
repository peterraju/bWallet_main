import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contributors: [],
  quque: [],
  status: "CON",
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

    removeContributor: (state, action) => {
      state.contributors = state.contributors.filter(
        (c) => c.pubkey !== action.payload,
      );
    },

    updateContributor: (state, action) => {
      const index = state.contributors.findIndex(
        (c) => c.pubkey === action.payload.pubkey,
      );
      state.contributors[index].name = action.payload.name;
    },

    addToQueue: (state, action) => {
      state.queue.push(action.payload);
    },

    removeFromQueue: (state, action) => {
      state.queue = state.queue.filter(
        (c) => c.walletAddress !== action.payload,
      );
    },

    emptyQueue: (state) => {
      state.queue = [];
    },
  },
});

export const {
  setContributors,
  setStatus,
  addContributor,
  removeContributor,
  updateContributor,
  addToQueue,
  removeFromQueue,
  emptyQueue,
} = tlbankSlice.actions;
