import { Address } from './address';
import { Person } from './person';
import { PizzaOrder } from './pizza';

type Order = {
  _id: string;
  person: Person;
  receiverAddress: Address;
  status: 0 | 1 | 2 | 3 | 4;
  cancellable: boolean;
  pizzas: PizzaOrder[];
};

export type { Order };
