import { useMemo, useState } from 'react';

import { useAppSelector } from '@/store';
import { Dough, Ingredient, PizzaBasket, Size } from '@/types';

const usePizzaInformation = (
  currentId: string | null,
  currentPizzaBasket: PizzaBasket | null,
  onAddInBasket: (pizza: PizzaBasket) => void,
) => {
  const pizzas = useAppSelector((state) => state.PizzaReducer.pizzas);
  const [currentSize, setCurrentSize] = useState<Size | null>(null);
  const [currentDough, setCurrentDough] = useState<Dough | null>(null);
  const [currentToppings, setCurrentToppings] = useState<Ingredient[]>([]);

  const currentPizza = useMemo(() => {
    if (!pizzas || !currentId) return null;
    const pizza = pizzas.find((pizza) => pizza.id === currentId);
    setCurrentSize(currentPizzaBasket?.size || pizza!.sizes[0]);
    setCurrentDough(currentPizzaBasket?.doughs || pizza!.doughs[0]);
    setCurrentToppings(currentPizzaBasket?.toppings || []);
    return pizza;
  }, [pizzas, currentId, currentPizzaBasket]);

  const onSizeClick = (size: Size) => {
    setCurrentSize(size);
  };

  const onToppingClick = (topping: Ingredient) => {
    if (currentToppings.find((item) => item.name === topping.name) !== undefined) {
      setCurrentToppings(currentToppings.filter((item) => item.name !== topping.name));
      return;
    }

    setCurrentToppings([...currentToppings, topping]);
  };

  const onAddBasket = () => {
    onAddInBasket({
      uuid: currentPizzaBasket?.uuid || crypto.randomUUID(),
      id: currentPizza!.id,
      description: currentPizza!.description,
      name: currentPizza!.name,
      img: currentPizza!.img,
      doughs: currentDough!,
      size: currentSize!,
      toppings: currentToppings,
      count: currentPizzaBasket?.count || 1,
    });
  };

  return {
    currentToppings,
    currentSize,
    currentDough,
    currentPizza,
    onSizeClick,
    onToppingClick,
    onAddBasket,
  };
};

export { usePizzaInformation };
