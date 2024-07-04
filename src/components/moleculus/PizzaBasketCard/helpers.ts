import { PizzaOrder } from '@/types';

const getTotalPrice = (pizza: PizzaOrder) => {
  const price = pizza.doughs.price + pizza.size.price;
  const toppingsPrice = pizza.toppings.reduce((acc, ing) => {
    return acc + ing.cost;
  }, 0);

  return price + toppingsPrice;
};

export { getTotalPrice };
