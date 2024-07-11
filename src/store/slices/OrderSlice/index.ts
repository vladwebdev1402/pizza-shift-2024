import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Order, PizzaBasket } from '@/types';

import { ChangeCountPayload } from './type';
import { getOrders, paymentPizza } from './actionCreators';
import { orders } from './data';

type InitialState = {
  basket: PizzaBasket[];
  orders: Order[];
  isPayLoading: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  basket: [],
  orders: orders,
  isPayLoading: false,
  isLoading: false,
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
    changeCountPizzaInBasket: (state, { payload: { pizza, type } }: ChangeCountPayload) => {
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
      state.basket = state.basket.filter((pizza) => pizza.uuid !== action.payload.uuid);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
    cancelOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.map((order) => {
        if (order._id === action.payload) return { ...order, status: 4, cancellable: false };
        return order;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(paymentPizza.pending, (state) => {
      state.isPayLoading = true;
      state.error = '';
    });
    builder.addCase(paymentPizza.fulfilled, (state, action) => {
      state.isPayLoading = false;
      state.orders = [action.payload.order, ...state.orders];
    });
    builder.addCase(paymentPizza.rejected, (state, action) => {
      state.isPayLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getOrders.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

const OrderReducer = OrderSlice.reducer;
const OrderActions = { ...OrderSlice.actions, paymentPizza, getOrders };

export { OrderActions, OrderReducer };
