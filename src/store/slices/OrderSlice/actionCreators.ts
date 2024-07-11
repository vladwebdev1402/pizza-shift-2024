import { createAsyncThunk } from '@reduxjs/toolkit';

import { Payment } from '@/types';
import { OrderApi } from '@/api';

const paymentPizza = createAsyncThunk('pizza/payment', async (data: Payment, thunkAPI) => {
  try {
    const response = await OrderApi.paymentPizza(data);
    return {
      order: {
        ...response.order,
        pizzas: data.pizzas,
      },
    };
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    return thunkAPI.rejectWithValue('Произошла неизвестная ошибка');
  }
});

const getOrders = createAsyncThunk('pizza/orders', async (_, thunkAPI) => {
  try {
    const response = await OrderApi.getOrders();
    return response;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    return thunkAPI.rejectWithValue('Произошла неизвестная ошибка');
  }
});

export { paymentPizza, getOrders };
