import { calcPricePizzaOrder } from '@/helpers';
import { PizzaOrder } from '@/types';

const calcTotalPrice = (pizzas: PizzaOrder[]) => {
  return pizzas.reduce((acc, pizza) => acc + calcPricePizzaOrder(pizza), 0);
};

export { calcTotalPrice };
