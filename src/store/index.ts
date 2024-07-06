import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { AuthReducer, AuthActions } from './slices/AuthSlice';
import { PizzaReducer, PizzaActions } from './slices/PizzaSlice';
import { OrderReducer, OrderActions } from './slices/OrderSlice';

const store = configureStore({
  reducer: {
    AuthReducer,
    PizzaReducer,
    OrderReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export type { RootState };
export {
  useAppDispatch,
  useAppSelector,
  store,
  AuthActions,
  PizzaActions,
  OrderActions,
};
