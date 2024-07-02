import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/types';
import { LocaleStorageService } from '@/api';

type InitialState = {
  user: null | User;
  otp: null | number;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: null,
  otp: null,
  isAuth: LocaleStorageService.checkToken(),
  isLoading: false,
  error: '',
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
});

const AuthReducer = AuthSlice.reducer;

export { AuthReducer };
