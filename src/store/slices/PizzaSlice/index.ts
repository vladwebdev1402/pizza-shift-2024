import { createSlice } from '@reduxjs/toolkit';

import { Pizza } from '@/types';

import { getCatalog } from './actionCreators';

type InitialState = {
  pizzas: Pizza[] | null;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  pizzas: null,
  isLoading: false,
  error: '',
};

const PizzaSlice = createSlice({
  name: 'PizzaSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatalog.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getCatalog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = action.payload;
    });
    builder.addCase(getCatalog.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

const PizzaActions = { ...PizzaSlice.actions, getCatalog };
const PizzaReducer = PizzaSlice.reducer;

export { PizzaReducer, PizzaActions };
