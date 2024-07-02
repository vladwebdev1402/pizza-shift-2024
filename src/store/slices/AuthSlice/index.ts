import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/types';
import { LocaleStorageService } from '@/api';
import { createOtp } from './actionCreators';

type InitialState = {
  user: null | User;
  delay: null | number;
  isAuth: boolean;
  isFetchLoading: boolean;
  isCreateOtpLoading: boolean;
  isCheckOtpLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: null,
  delay: null,
  isAuth: LocaleStorageService.checkToken(),
  isFetchLoading: false,
  isCreateOtpLoading: false,
  isCheckOtpLoading: false,
  error: '',
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOtp.pending, (state) => {
      state.isCreateOtpLoading = true;
      state.error = '';
    });
    builder.addCase(createOtp.fulfilled, (state, action) => {
      state.isCreateOtpLoading = false;
      state.delay = action.payload.retryDelay;
    });
    builder.addCase(createOtp.rejected, (state, action) => {
      state.isCreateOtpLoading = false;
      state.error =
        typeof action.payload === 'string'
          ? action.payload
          : 'Произошла неизвестная ошибка';
    });
  },
});

const AuthReducer = AuthSlice.reducer;
const AuthActions = { ...AuthSlice.actions, createOtp };
export { AuthReducer, AuthActions };
