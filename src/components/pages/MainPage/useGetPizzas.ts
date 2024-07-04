import { useEffect } from 'react';

import {
  OrderActions,
  PizzaActions,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { PizzaOrder } from '@/types';

const useGetPizzas = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, pizzas } = useAppSelector(
    (state) => state.PizzaReducer,
  );
  const isAuth = useAppSelector((state) => state.AuthReducer.isAuth);
  const addPizzaInBasket = OrderActions.addPizzaInBasket;

  const onAddInBasket = (pizza: PizzaOrder) => {
    dispatch(addPizzaInBasket(pizza));
  };

  useEffect(() => {
    if (pizzas === null) {
      dispatch(PizzaActions.getCatalog());
    }
  }, [pizzas]);

  return { isLoading, error, pizzas, isAuth, onAddInBasket };
};

export { useGetPizzas };
