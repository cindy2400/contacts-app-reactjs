import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  contactStatus: ["Brother", "Sister", "Parent", "Child", "Spouse"],
  numberPhones: [],
  familyMemberData: [{}],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact(state, action) {
      const { tempContact } = action.payload;
      const contact = {
        name: tempContact.name,
        ektpNumber: tempContact.ektpNumber,
        address: tempContact.address,
        job: tempContact.job,
        dateOfBirth: tempContact.dateOfBirth,
        phoneNumber: [tempContact.phoneNumber, ...state.numberPhones],
        familyMember: [
          {
            familyMemberName: tempContact.familyMemberName,
            familyMemberDateOfBirth: tempContact.familyMemberDateOfBirth,
            familyMemberStatus: tempContact.familyMemberStatus,
          },
          ...state.familyMemberData,
        ],
      };
      state.contacts.push(contact);
      state.numberPhones = [];
      state.familyMemberData = [{}];
    },
    addNumberPhones(state, action) {
      state.numberPhones.push([]);
    },
    changeNumberPhones(state, action) {
      state.numberPhones = state.numberPhones.map((num, i) => {
        if (i === action.payload.index) {
          num = action.payload.data;
        }
        return num;
      });
    },
    deleteNumberPhone(state, action) {
      const tempNumberPhones = [...state.numberPhones];
      tempNumberPhones.splice(action.payload, 1);
      state.numberPhones = tempNumberPhones;
    },
    addFamilyMember(state, action) {
      state.familyMemberData.push({});
    },
    changeFamilyMember(state, action) {
      const { memberInputName, memberInputValue, index } = action.payload;
      state.familyMemberData = state.familyMemberData.map((member, i) => {
        if (i === index) {
          member = {
            ...member,
            [memberInputName]: memberInputValue,
          };
        }
        return member;
      });
    },
    deleteFamilyMember(state, action) {
      const tempFamilyMember = [...state.familyMemberData];
      tempFamilyMember.splice(action.payload, 1);
      state.familyMemberData = tempFamilyMember;
    },
  },
});

export const contactsActions = contactsSlice.actions;
