import { calcPricePizzaBasket } from '@/helpers';
import { PizzaBasket } from '@/types';

const calcTotalPrice = (pizzas: PizzaBasket[]) => {
  return pizzas.reduce((acc, pizza) => acc + calcPricePizzaBasket(pizza), 0);
};

export { calcTotalPrice };
