import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi } from './api';
import { SignInData } from './type';
import { User } from '@/types';

const createOtp = createAsyncThunk(
  'auth/otp',
  async (phone: string, thunkAPI) => {
    try {
      const data = await AuthApi.createOtp(phone);
      return data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
      else return thunkAPI.rejectWithValue('Происзошла неизвестна ошибка');
    }
  },
);

const userSignin = createAsyncThunk(
  'auth/signin',
  async (data: SignInData, thunkAPI) => {
    try {
      const response = await AuthApi.userSignin(data);
      return response;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
      else return thunkAPI.rejectWithValue('Происзошла неизвестна ошибка');
    }
  },
);

const getSession = createAsyncThunk('auth/session', async (_, thunkAPI) => {
  try {
    const response = await AuthApi.getSession();
    return response;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    else return thunkAPI.rejectWithValue('Происзошла неизвестна ошибка');
  }
});

const updateProfile = createAsyncThunk(
  'auth/profile',
  async (user: User, thunkAPI) => {
    try {
      await AuthApi.updateProfile(user);
      return user;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
      else return thunkAPI.rejectWithValue('Происзошла неизвестна ошибка');
    }
  },
);

export { createOtp, userSignin, getSession, updateProfile };
