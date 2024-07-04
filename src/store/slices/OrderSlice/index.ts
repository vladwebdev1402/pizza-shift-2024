import lodash from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PizzaOrder } from '@/types';

import { ChangeCountPayload, ChangePizzaPayload } from './type';

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
    changePizzaInBasket: (state, action: ChangePizzaPayload) => {
      state.basket = state.basket.map((pizza) => {
        if (lodash.isEqual(pizza, action.payload.oldPizza)) {
          return action.payload.newPizza;
        }
        return pizza;
      });
    },
    changeCountPizzaInBasket: (
      state,
      { payload: { pizza, type } }: ChangeCountPayload,
    ) => {
      state.basket = state.basket.map((item) => {
        if (lodash.isEqual(item, pizza)) {
          return {
            ...pizza,
            count: type === 'increment' ? pizza.count + 1 : pizza.count - 1,
          };
        }
        return item;
      });

      state.basket = state.basket.filter((pizza) => pizza.count > 0);
    },
    deletePizzaFromBasket: (state, action: PayloadAction<PizzaOrder>) => {
      state.basket = state.basket.filter(
        (pizza) => !lodash.isEqual(pizza, action.payload),
      );
    },
  },
});

const OrderReducer = OrderSlice.reducer;
const OrderActions = { ...OrderSlice.actions };

export { OrderActions, OrderReducer };
