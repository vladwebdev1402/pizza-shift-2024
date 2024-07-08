import { Address } from './address';
import { DebitCard } from './debitCard';
import { Person } from './person';
import { PizzaOrder } from './pizza';

type Payment = {
  person: Person;
  receiverAddress: Address;
  debitCard: DebitCard;
  pizzas: PizzaOrder[];
};

export type { Payment };
