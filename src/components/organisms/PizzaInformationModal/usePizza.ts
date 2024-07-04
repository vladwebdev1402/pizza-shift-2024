import { useMemo, useState } from 'react';

import { useAppSelector } from '@/store';
import { Dough, Ingredient, Size } from '@/types';

const usePizza = (currentId: string | null) => {
  const pizzas = useAppSelector((state) => state.PizzaReducer.pizzas);
  const [currentSize, setCurrentSize] = useState<Size | null>(null);
  const [currentDough, setCurrentDough] = useState<Dough | null>(null);
  const [currentToppings, setCurrentToppings] = useState<Ingredient[]>([]);

  const currentPizza = useMemo(() => {
    if (!pizzas || !currentId) return null;
    const pizza = pizzas.find((pizza) => pizza.id === currentId);
    setCurrentSize(pizza!.sizes[0]);
    setCurrentDough(pizza!.doughs[0]);
    return pizza;
  }, [pizzas, currentId]);

  const onSizeClick = (size: Size) => {
    setCurrentSize(size);
  };

  const onToppingClick = (topping: Ingredient) => {
    if (
      currentToppings.find((item) => item.name === topping.name) !== undefined
    ) {
      setCurrentToppings(
        currentToppings.filter((item) => item.name !== topping.name),
      );
      return;
    }

    setCurrentToppings([...currentToppings, topping]);
  };

  return {
    currentToppings,
    currentSize,
    currentDough,
    currentPizza,
    onSizeClick,
    onToppingClick,
  };
};

export { usePizza };
