import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi } from './api';
import { SignInData } from './type';

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

export { createOtp, userSignin };
