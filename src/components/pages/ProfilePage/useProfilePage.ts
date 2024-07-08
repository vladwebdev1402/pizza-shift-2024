import { useEffect } from 'react';

import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import { User } from '@/types';

const useProfilePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, user, isFetchLoading, isUpdateLoading } = useAppSelector(
    (state) => state.AuthReducer,
  );

  const onProfileSbumit = (data: User) => {
    dispatch(AuthActions.updateProfile(data));
  };

  useEffect(() => {
    if (user === null && isAuth) dispatch(AuthActions.getSession());
  }, [user, isAuth]);

  return {
    user,
    isAuth,
    isFetchLoading,
    isUpdateLoading,
    onProfileSbumit,
  };
};

export { useProfilePage };
