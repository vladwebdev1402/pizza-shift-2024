import { PayloadAction } from '@reduxjs/toolkit';

import { PizzaBasket } from '@/types';

type ChangeCountPayload = PayloadAction<{
  pizza: PizzaBasket;
  type: 'increment' | 'decrement';
}>;

export type { ChangeCountPayload };
