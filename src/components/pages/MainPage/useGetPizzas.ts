import { useEffect } from 'react';

import { PizzaActions, useAppDispatch, useAppSelector } from '@/store';

const useGetPizzas = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, pizzas } = useAppSelector(
    (state) => state.PizzaReducer,
  );
  const isAuth = useAppSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    if (pizzas === null) {
      dispatch(PizzaActions.getCatalog());
    }
  }, [pizzas]);

  return { isLoading, error, pizzas, isAuth };
};

export { useGetPizzas };
