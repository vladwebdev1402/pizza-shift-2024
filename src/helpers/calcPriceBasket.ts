import { PizzaBasket } from '@/types';

import { calcPricePizzaBasket } from './calcPricePizzaBasket';

const calcPriceBasket = (pizzas: PizzaBasket[]) => {
  return pizzas.reduce((acc, pizza) => acc + calcPricePizzaBasket(pizza), 0);
};

export { calcPriceBasket };
