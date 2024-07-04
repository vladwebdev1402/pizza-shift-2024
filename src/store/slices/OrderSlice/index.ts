import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  reducers: {
    addPizzaInBasket: (state, action: PayloadAction<PizzaOrder>) => {
      state.basket.push(action.payload);
    },
  },
});

const OrderReducer = OrderSlice.reducer;
const OrderActions = { ...OrderSlice.actions };

export { OrderActions, OrderReducer };
