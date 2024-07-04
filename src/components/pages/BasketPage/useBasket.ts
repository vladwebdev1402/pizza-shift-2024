import { useState } from 'react';

import { OrderActions, useAppDispatch, useAppSelector } from '@/store';
import { PizzaOrder } from '@/types';

const useBasket = () => {
  const dispatch = useAppDispatch();
  const [currentPizza, setCurrentPizza] = useState<PizzaOrder | null>(null);
  const basket = useAppSelector((state) => state.OrderReducer.basket);

  const onChangeClick = (pizza: PizzaOrder) => {
    setCurrentPizza(pizza);
  };

  const onAddInBasket = (pizza: PizzaOrder) => {
    if (currentPizza)
      dispatch(
        OrderActions.changePizzaInBasket({
          oldPizza: currentPizza,
          newPizza: pizza,
        }),
      );
    setCurrentPizza(null);
  };

  const onIncrement = (pizza: PizzaOrder) => {
    dispatch(
      OrderActions.changeCountPizzaInBasket({
        pizza,
        type: 'increment',
      }),
    );
  };

  const onDecrement = (pizza: PizzaOrder) => {
    dispatch(
      OrderActions.changeCountPizzaInBasket({
        pizza,
        type: 'decrement',
      }),
    );
  };

  const onDelete = (pizza: PizzaOrder) => {
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
