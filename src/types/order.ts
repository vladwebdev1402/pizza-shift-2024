import { Address } from './address';
import { Person } from './person';
import { PizzaOrder } from './pizza';

type Order = {
  person: Person;
  receiverAddress: Address;
  status: 1 | 2 | 3 | 4 | 5;
  cancellable: boolean;
  pizzas: PizzaOrder[];
};

export type { Order };
