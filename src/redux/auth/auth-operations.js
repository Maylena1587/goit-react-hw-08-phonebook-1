import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as API from 'services/phonebook-api';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = await API.createUser(name, email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await API.loginUser(email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await API.logoutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('you have to log in');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
    try {
      const response = await API.fetchCurrentUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
