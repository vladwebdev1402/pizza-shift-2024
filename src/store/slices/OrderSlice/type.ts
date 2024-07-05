import { PayloadAction } from '@reduxjs/toolkit';

import { PizzaBasket } from '@/types';

type ChangeCountPayload = PayloadAction<{
  pizza: PizzaBasket;
  type: 'increment' | 'decrement';
}>;

type ChangePizzaPayload = PayloadAction<{
  oldPizza: PizzaBasket;
  newPizza: PizzaBasket;
}>;

export type { ChangeCountPayload, ChangePizzaPayload };
