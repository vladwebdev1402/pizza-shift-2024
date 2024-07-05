import { useState } from 'react';

import { OrderActions, useAppDispatch, useAppSelector } from '@/store';
import { PizzaBasket } from '@/types';

const useBasket = () => {
  const dispatch = useAppDispatch();
  const [currentPizza, setCurrentPizza] = useState<PizzaBasket | null>(null);
  const basket = useAppSelector((state) => state.OrderReducer.basket);

  const onChangeClick = (pizza: PizzaBasket) => {
    setCurrentPizza(pizza);
  };

  const onAddInBasket = (pizza: PizzaBasket) => {
    if (currentPizza) dispatch(OrderActions.changePizzaInBasket(pizza));
    setCurrentPizza(null);
  };

  const onIncrement = (pizza: PizzaBasket) => {
    dispatch(
      OrderActions.changeCountPizzaInBasket({
        pizza,
        type: 'increment',
      }),
    );
  };

  const onDecrement = (pizza: PizzaBasket) => {
    dispatch(
      OrderActions.changeCountPizzaInBasket({
        pizza,
        type: 'decrement',
      }),
    );
  };

  const onDelete = (pizza: PizzaBasket) => {
    dispatch(OrderActions.deletePizzaFromBasket(pizza));
  };

  return {
    currentPizza,
    basket,
    onChangeClick,
    onAddInBasket,
    onIncrement,
    onDecrement,
    onDelete,
  };
};

export { useBasket };
