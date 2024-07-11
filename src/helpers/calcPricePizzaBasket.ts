import { PizzaBasket } from '@/types';

import { calcPricePizzaOrder } from './calcPricePizzaOrder';

const calcPricePizzaBasket = (pizza: PizzaBasket) => {
  return calcPricePizzaOrder(pizza) * pizza.count;
};

export { calcPricePizzaBasket };
