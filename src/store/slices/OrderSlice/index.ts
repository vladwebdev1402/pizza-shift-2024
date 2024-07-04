import { createSlice } from '@reduxjs/toolkit';

import { PizzaOrder } from '@/types';

type InitialState = {
  basket: PizzaOrder[];
};

const initialState: InitialState = {
  basket: [],
};

const OrderSlice = createSlice({
  name: 'OrderSlice',
  initialState,
  reducers: {},
});

const OrderReducer = OrderSlice.reducer;
const OrderActions = { ...OrderSlice.actions };

export { OrderActions, OrderReducer };
