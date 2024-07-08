import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Order, PizzaBasket } from '@/types';

import { ChangeCountPayload } from './type';
import { paymentPizza } from './actionCreators';

type InitialState = {
  basket: PizzaBasket[];
  orders: Order[];
  isPayLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  basket: [],
  orders: [],
  isPayLoading: false,
  error: '',
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
    clearBasket: (state) => {
      state.basket = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(paymentPizza.pending, (state) => {
      state.isPayLoading = true;
      state.error = '';
    });
    builder.addCase(paymentPizza.fulfilled, (state, action) => {
      state.isPayLoading = false;
      state.orders.push(action.payload);
    });
    builder.addCase(paymentPizza.rejected, (state, action) => {
      state.isPayLoading = false;
      state.error =
        typeof action.payload === 'string'
          ? action.payload
          : 'Произошла неизвестная ошибка';
    });
  },
});

const OrderReducer = OrderSlice.reducer;
const OrderActions = { ...OrderSlice.actions, paymentPizza };

export { OrderActions, OrderReducer };
