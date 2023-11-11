import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contributors: [],
  queue: [],
  transactions: [],
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
      state.queue = state.queue.filter((c) => {
        console.log(c, action.payload);
        return c.pubKey !== action.payload;
      });
    },

    emptyQueue: (state) => {
      state.queue = [];
    },

    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },

    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
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
  setTransactions,
  addTransaction,
} = tlbankSlice.actions;
