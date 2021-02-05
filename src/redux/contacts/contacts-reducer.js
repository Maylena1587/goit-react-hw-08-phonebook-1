import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations, contactsActions } from 'redux/contacts';

const { fetchContacts, addContact, deleteContact } = contactsOperations;
const { changeFilter } = contactsActions;

const initialState = {
  entries: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [changeFilter](state, { payload }) {
      state.filter = payload;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.entries = payload;
      state.isLoading = false;
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.entries = [...state.entries, payload];
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.entries = state.entries.filter(contact => contact.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
