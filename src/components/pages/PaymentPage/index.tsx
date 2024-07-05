import clsx from 'clsx';

import { ROUTER_PATHS } from '@/constants';
import { Button, Typography } from '@/components/atoms';
import {
  AddressForm,
  CardForm,
  ProfileForm,
  ProfileFormSkeleton,
} from '@/components/moleculus';

import { usePaymentPage } from './usePaymentPage';
import style from './style.module.scss';

const PaymentPage = () => {
  const {
    step,
    user,
    isFetchLoading,
    isPayLoading,
    onAddressSubmit,
    onBackPage,
    onCardSubmit,
    onProfileSubmit,
    prevStep,
  } = usePaymentPage();

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
              onClick={onBackPage}
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
          Куда доставить
        </Typography>
        <AddressForm className={style.profile} onSubmit={onAddressSubmit}>
          <div className={style.profile_buttons}>
            <Button
              variant="outlined"
              onClick={prevStep}
              className={style.profile_button}
            >
              Назад
            </Button>
            <Button className={style.profile_button}>Продолжить</Button>
          </div>
        </AddressForm>
      </div>
    );

  if (step === 3)
    return (
      <div className={clsx('container', style.container)}>
        <Typography variant="h2" tag="h2">
          Введите данные карты для оплаты
        </Typography>
        <div className={style.form}>
          <CardForm onSubmit={onCardSubmit}>
            <Button className={style.card_button} loading={isPayLoading}>
              Оплатить
            </Button>
          </CardForm>
        </div>
      </div>
    );
};

export { PaymentPage };
