import { Address } from './address';
import { Person } from './person';

type Order = {
  person: Person;
  receiverAddress: Address;
  status: number;
  cancellable: 1 | 2 | 3 | 4 | 5;
};

export type { Order };
