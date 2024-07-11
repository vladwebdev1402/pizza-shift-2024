import { calcPricePizzaOrder } from '@/helpers';
import { PizzaOrder } from '@/types';

const calcOrderPrice = (pizzas: PizzaOrder[]) => {
  return pizzas.reduce((acc, pizza) => acc + calcPricePizzaOrder(pizza), 0);
};

export { calcOrderPrice };
