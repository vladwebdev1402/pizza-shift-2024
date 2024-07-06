import { useEffect } from 'react';
import clsx from 'clsx';

import { Button, Typography } from '@/components/atoms';
import {
  AuthForm,
  ProfileForm,
  ProfileFormSkeleton,
} from '@/components/moleculus';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import { User } from '@/types';

import style from './style.module.scss';

const ProfilePage = () => {
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

  if (isAuth && isFetchLoading)
    return (
      <div className={clsx('container', style.container)}>
        <Typography variant="h2" tag="h2">
          Профиль
        </Typography>
        <ProfileFormSkeleton className={style.form} />
      </div>
    );

  if (isAuth && user)
    return (
      <div className={clsx('container', style.container)}>
        <Typography variant="h2" tag="h2">
          Профиль
        </Typography>
        <ProfileForm
          className={style.form}
          defaultValues={user}
          onSubmit={onProfileSbumit}
          isDisabledPhone
        >
          <Button className={style.update} loading={isUpdateLoading}>
            Обновить данные
          </Button>
        </ProfileForm>
      </div>
    );

  return (
    <div className={clsx('container', style.container)}>
      <Typography variant="h2" tag="h2">
        Авторизация
      </Typography>
      <AuthForm className={style.auth_form} />
    </div>
  );
};

export { ProfilePage };
