import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact(state, action) {
      const { tempContact, addedPhoneNumbers, addedFamilyMemberData } =
        action.payload;
      const contact = {
        name: tempContact.name,
        ektpNumber: tempContact.ektpNumber,
        address: tempContact.address,
        job: tempContact.job,
        dateOfBirth: tempContact.dateOfBirth,
        phoneNumber: [tempContact.phoneNumber, ...addedPhoneNumbers],
        familyMember: [
          {
            familyMemberName: tempContact.familyMemberName,
            familyMemberDateOfBirth: tempContact.familyMemberDateOfBirth,
            familyMemberStatus: tempContact.familyMemberStatus,
          },
          ...addedFamilyMemberData,
        ],
      };
      state.contacts.push(contact);
    },
  },
});

export const contactsActions = contactsSlice.actions;
