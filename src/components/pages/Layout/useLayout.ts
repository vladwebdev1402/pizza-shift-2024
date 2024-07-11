import { useEffect } from 'react';

import { AuthActions, useAppDispatch, useAppSelector } from '@/store';

const useLayout = () => {
  const dispatch = useAppDispatch();

  const { isAuth, user } = useAppSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (user === null && isAuth) dispatch(AuthActions.getSession());
  }, [user, isAuth]);
};

export { useLayout };
