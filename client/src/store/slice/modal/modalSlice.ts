import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalState: false,
    modalUpdate: false,
  },
  reducers: {
    onOpenDateModal: (state) => {
      state.modalState = true;
    },
    onOpenModalUpdate: (state) => {
      state.modalUpdate = true;
    },
    onCloseDateModal: (state) => {
      state.modalState = false;
      state.modalUpdate = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal, onOpenModalUpdate } =
  modalSlice.actions;
