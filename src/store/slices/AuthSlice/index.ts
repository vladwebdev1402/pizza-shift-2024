import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/types';
import { LocaleStorageService } from '@/api';
import {
  createOtp,
  getSession,
  updateProfile,
  userSignin,
} from './actionCreators';

type InitialState = {
  user: null | User;
  delay: null | number;
  isAuth: boolean;
  isFetchLoading: boolean;
  isCreateOtpLoading: boolean;
  isCheckOtpLoading: boolean;
  isUpdateLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: null,
  delay: null,
  isAuth: LocaleStorageService.checkToken(),
  isFetchLoading: false,
  isCreateOtpLoading: false,
  isCheckOtpLoading: false,
  isUpdateLoading: false,
  error: '',
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuth = false;
      state.delay = null;
      LocaleStorageService.removeToken();
    },
  },
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

    builder.addCase(userSignin.pending, (state) => {
      state.isCheckOtpLoading = true;
      state.error = '';
    });
    builder.addCase(userSignin.fulfilled, (state, action) => {
      state.isCheckOtpLoading = false;
      state.user = action.payload.user;
      state.isAuth = true;
      LocaleStorageService.setToken(action.payload.token);
    });
    builder.addCase(userSignin.rejected, (state, action) => {
      state.isCheckOtpLoading = false;
      state.error =
        typeof action.payload === 'string'
          ? action.payload
          : 'Произошла неизвестная ошибка';
    });

    builder.addCase(getSession.pending, (state) => {
      state.isFetchLoading = true;
      state.error = '';
    });
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.isFetchLoading = false;
      state.user = action.payload.user;
    });
    builder.addCase(getSession.rejected, (state, action) => {
      state.isFetchLoading = false;
      state.error =
        typeof action.payload === 'string'
          ? action.payload
          : 'Произошла неизвестная ошибка';
    });

    builder.addCase(updateProfile.pending, (state) => {
      state.isUpdateLoading = true;
      state.error = '';
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isUpdateLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isUpdateLoading = false;
      state.error =
        typeof action.payload === 'string'
          ? action.payload
          : 'Произошла неизвестная ошибка';
    });
  },
});

const AuthReducer = AuthSlice.reducer;
const AuthActions = {
  ...AuthSlice.actions,
  createOtp,
  userSignin,
  getSession,
  updateProfile,
};
export { AuthReducer, AuthActions };
