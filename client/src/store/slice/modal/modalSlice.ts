import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalState: false,
  },
  reducers: {
    onOpenDateModal: (state) => {
      state.modalState = true;
    },

    onCloseDateModal: (state) => {
      state.modalState = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = modalSlice.actions;
