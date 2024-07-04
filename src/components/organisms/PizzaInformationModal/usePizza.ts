import { useMemo, useState } from 'react';

import { useAppSelector } from '@/store';
import { Dough, Ingredient, PizzaOrder, Size } from '@/types';

const usePizza = (
  currentId: string | null,
  onAddInBasket: (pizza: PizzaOrder) => void,
) => {
  const pizzas = useAppSelector((state) => state.PizzaReducer.pizzas);
  const [currentSize, setCurrentSize] = useState<Size | null>(null);
  const [currentDough, setCurrentDough] = useState<Dough | null>(null);
  const [currentToppings, setCurrentToppings] = useState<Ingredient[]>([]);

  const currentPizza = useMemo(() => {
    if (!pizzas || !currentId) return null;
    const pizza = pizzas.find((pizza) => pizza.id === currentId);
    setCurrentSize(pizza!.sizes[0]);
    setCurrentDough(pizza!.doughs[0]);
    setCurrentToppings([]);
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

  const onAddBasket = () => {
    onAddInBasket({
      id: currentPizza!.id,
      description: currentPizza!.description,
      name: currentPizza!.name,
      img: currentPizza!.img,
      doughs: currentDough!,
      size: currentSize!,
      toppings: currentToppings,
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

export { usePizza };
