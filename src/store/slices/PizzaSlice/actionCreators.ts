import { createAsyncThunk } from '@reduxjs/toolkit';
import { PizzaApi } from './PizzaApi';

const getCatalog = createAsyncThunk('pizza/catalog', async (_, thunkAPI) => {
  try {
    const response = await PizzaApi.getCatalog();
    return response.catalog;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    return thunkAPI.rejectWithValue('Произошла неизвестная ошибка');
  }
});

export { getCatalog };
