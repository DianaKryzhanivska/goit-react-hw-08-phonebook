import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goItApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = goItApi.post('/users/signup', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
