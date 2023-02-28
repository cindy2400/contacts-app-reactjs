import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/contacts-slice";

const Store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
});

export default Store;
