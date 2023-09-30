import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://connections-api.herokuapp.com
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const goItApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  goItApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await goItApi.post('/users/signup', credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// thunkApi.rejectWithValue = {rejectWithValue}

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await goItApi.post('/users/login', credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      await goItApi.post('/users/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
