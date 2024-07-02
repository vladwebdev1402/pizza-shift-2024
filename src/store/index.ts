import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { AuthReducer } from './slices/AuthSlice';

const store = configureStore({
  reducer: {
    AuthReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export type { RootState };
export { useAppDispatch, useAppSelector, store };
