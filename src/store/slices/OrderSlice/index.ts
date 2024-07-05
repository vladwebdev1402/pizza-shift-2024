import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PizzaBasket } from '@/types';

import { ChangeCountPayload } from './type';

type InitialState = {
  basket: PizzaBasket[];
};

const initialState: InitialState = {
  basket: [],
};

const OrderSlice = createSlice({
  name: 'OrderSlice',
  initialState,
  reducers: {
    addPizzaInBasket: (state, action: PayloadAction<PizzaBasket>) => {
      state.basket.push(action.payload);
    },
    changePizzaInBasket: (state, action: PayloadAction<PizzaBasket>) => {
      state.basket = state.basket.map((pizza) =>
        pizza.uuid === action.payload.uuid ? action.payload : pizza,
      );
    },
    changeCountPizzaInBasket: (
      state,
      { payload: { pizza, type } }: ChangeCountPayload,
    ) => {
      state.basket = state.basket.map((item) => {
        if (item.uuid === pizza.uuid) {
          return {
            ...pizza,
            count: type === 'increment' ? pizza.count + 1 : pizza.count - 1,
          };
        }
        return item;
      });

      state.basket = state.basket.filter((pizza) => pizza.count > 0);
    },
    deletePizzaFromBasket: (state, action: PayloadAction<PizzaBasket>) => {
      state.basket = state.basket.filter(
        (pizza) => pizza.uuid !== action.payload.uuid,
      );
    },
  },
});

const OrderReducer = OrderSlice.reducer;
const OrderActions = { ...OrderSlice.actions };

export { OrderActions, OrderReducer };
