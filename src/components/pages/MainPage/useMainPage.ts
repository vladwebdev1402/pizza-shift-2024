import { useEffect } from 'react';

import { OrderActions, PizzaActions, useAppDispatch, useAppSelector } from '@/store';
import { PizzaBasket } from '@/types';

const useMainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, pizzas } = useAppSelector((state) => state.PizzaReducer);
  const isAuth = useAppSelector((state) => state.AuthReducer.isAuth);
  const addPizzaInBasket = OrderActions.addPizzaInBasket;

  const onAddInBasket = (pizza: PizzaBasket) => {
    dispatch(addPizzaInBasket(pizza));
  };

  useEffect(() => {
    if (pizzas === null) {
      dispatch(PizzaActions.getCatalog());
    }
  }, [pizzas]);

  return { isLoading, error, pizzas, isAuth, onAddInBasket };
};

export { useMainPage };
