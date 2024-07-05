import { PayloadAction } from '@reduxjs/toolkit';

import { Address, DebitCard, Person, PizzaBasket, PizzaOrder } from '@/types';

type ChangeCountPayload = PayloadAction<{
  pizza: PizzaBasket;
  type: 'increment' | 'decrement';
}>;

type PaymentPizzaPayload = {
  receiverAddress: Address;
  person: Person;
  debitCard: DebitCard;
  pizzass: PizzaOrder;
};

export type { ChangeCountPayload, PaymentPizzaPayload };
