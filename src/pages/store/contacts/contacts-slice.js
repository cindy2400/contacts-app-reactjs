import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const contactsActions = contactsSlice.actions;
