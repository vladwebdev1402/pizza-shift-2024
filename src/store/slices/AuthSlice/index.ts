import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/types';

type InitialState = {
  user: null | User;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: null,
  isAuth: false,
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
