import { PayloadAction } from '@reduxjs/toolkit';

import { PizzaOrder } from '@/types';

type ChangeCountPayload = PayloadAction<{
  pizza: PizzaOrder;
  type: 'increment' | 'decrement';
}>;

type ChangePizzaPayload = PayloadAction<{
  oldPizza: PizzaOrder;
  newPizza: PizzaOrder;
}>;

export type { ChangeCountPayload, ChangePizzaPayload };
