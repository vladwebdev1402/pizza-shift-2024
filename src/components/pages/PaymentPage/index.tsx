import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { ROUTER_PATHS } from '@/constants';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import { Button, Typography } from '@/components/atoms';
import {
  CardForm,
  ProfileForm,
  ProfileFormSkeleton,
} from '@/components/moleculus';

import style from './style.module.scss';

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isFetchLoading, user } = useAppSelector((state) => state.AuthReducer);
  const [step, setStep] = useState(1);

  const onProfileSubmit = () => {
    setStep(2);
  };

  const onCardSubmit = () => {};

  useEffect(() => {
    if (user === null) {
      dispatch(AuthActions.getSession());
    }
  }, [user]);

  if (isFetchLoading)
    return (
      <div className={clsx('container', style.container)}>
        <ProfileFormSkeleton className={style.profile} />
      </div>
    );

  if (step === 1 && user !== null)
    return (
      <div className={clsx('container', style.container)}>
        <Typography variant="h2" tag="h2">
          Введите ваши данные
        </Typography>
        <ProfileForm
          className={style.profile}
          onSubmit={onProfileSubmit}
          defaultValues={user}
        >
          <div className={style.profile_buttons}>
            <Button
              variant="outlined"
              onClick={() => navigate(ROUTER_PATHS.basket)}
              className={style.profile_button}
            >
              Назад
            </Button>
            <Button className={style.profile_button}>Продолжить</Button>
          </div>
        </ProfileForm>
      </div>
    );

  if (step === 2)
    return (
      <div className={clsx('container', style.container)}>
        <Typography variant="h2" tag="h2">
          Введите данные карты для оплаты
        </Typography>
        <div className={style.form}>
          <CardForm onSubmit={onCardSubmit}>
            <Button className={style.card_button}>Оплатить</Button>
          </CardForm>
        </div>
      </div>
    );
};

export { PaymentPage };
