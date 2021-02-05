import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const addedContact = await API.addContact(name, number);
      return addedContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const deletedContact = API.deleteContact(id);
      return deletedContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
