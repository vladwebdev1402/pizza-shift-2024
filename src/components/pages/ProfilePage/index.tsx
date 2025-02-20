import clsx from 'clsx';

import { Button, Typography } from '@/components/atoms';
import { ProfileForm, ProfileFormSkeleton } from '@/components/moleculus';
import { AuthForm } from '@/components/organisms';

import { useProfilePage } from './useProfilePage';
import style from './style.module.scss';

const ProfilePage = () => {
  const { user, isAuth, isFetchLoading, isUpdateLoading, onProfileSbumit } = useProfilePage();

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
        <Typography variant="h2" tag="h2" className={style.title}>
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
