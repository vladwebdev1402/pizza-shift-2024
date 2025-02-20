import clsx from 'clsx';

import { Button, Typography } from '@/components/atoms';
import {
  AddressForm,
  CardForm,
  MobileTitleButton,
  PaymentInformationModal,
  ProfileForm,
  ProfileFormSkeleton,
} from '@/components/moleculus';
import ArrowIcon from '@/assets/decorative/arrow.svg?react';

import { usePaymentPage } from './usePaymentPage';
import style from './style.module.scss';

const PaymentPage = () => {
  const {
    step,
    user,
    basket,
    receiverAddress,
    isFetchLoading,
    isPayLoading,
    isShowOrder,
    goToMainPage,
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
        <MobileTitleButton icon={<ArrowIcon />} onClick={onBackPage}>
          Ваши данные
        </MobileTitleButton>
        <Typography variant="h2" tag="h2" className={style.title}>
          Введите ваши данные
        </Typography>
        <ProfileForm className={style.profile} onSubmit={onProfileSubmit} defaultValues={user}>
          <div className={style.profile_buttons}>
            <Button
              variant="outlined"
              onClick={onBackPage}
              className={clsx(style.back_button, style.profile_button)}
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
        <MobileTitleButton icon={<ArrowIcon />} onClick={prevStep}>
          Куда доставить
        </MobileTitleButton>
        <Typography variant="h2" tag="h2" className={style.title}>
          Куда доставить
        </Typography>
        <AddressForm
          className={style.profile}
          onSubmit={onAddressSubmit}
          defaultValues={receiverAddress}
        >
          <div className={style.profile_buttons}>
            <Button
              variant="outlined"
              onClick={prevStep}
              className={clsx(style.back_button, style.profile_button)}
            >
              Назад
            </Button>
            <Button className={style.profile_button}>Продолжить</Button>
          </div>
        </AddressForm>
      </div>
    );

  if (step === 3 && receiverAddress)
    return (
      <>
        <div className={clsx('container', style.container)}>
          <MobileTitleButton icon={<ArrowIcon />} onClick={prevStep}>
            Карта оплаты
          </MobileTitleButton>
          <Typography variant="h2" tag="h2" className={style.title}>
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
        <PaymentInformationModal
          basket={basket}
          isOpen={isShowOrder}
          onClose={goToMainPage}
          receiverAddress={receiverAddress}
        />
      </>
    );
};

export { PaymentPage };
