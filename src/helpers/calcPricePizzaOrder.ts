import { PizzaBasket } from '@/types';

const calcPricePizzaBasket = (pizza: PizzaBasket) => {
  const price = pizza.doughs.price + pizza.size.price;
  const toppingsPrice = pizza.toppings.reduce((acc, ing) => {
    return acc + ing.cost;
  }, 0);

  return (price + toppingsPrice) * pizza.count;
};

export { calcPricePizzaBasket };
