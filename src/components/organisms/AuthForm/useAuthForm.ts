import { useEffect } from 'react';

import { replaceToNumbers } from '@/helpers';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import { useTimer } from '@/hooks';

import { AuthData } from './type';

const useAuthForm = (onSuccessAuth = () => {}) => {
  const dispatch = useAppDispatch();
  const { isCreateOtpLoading, delay, isCheckOtpLoading, error } = useAppSelector(
    (state) => state.AuthReducer,
  );
  const { seconds, resetTimer } = useTimer(0);

  const onFormSubmit = async (data: AuthData, reset: () => void) => {
    if (delay === null) {
      dispatch(AuthActions.createOtp(replaceToNumbers(data.phone)));
      return;
    }

    const resultAction = await dispatch(
      AuthActions.userSignin({
        phone: replaceToNumbers(data.phone),
        code: Number(data.otp),
      }),
    );

    if (resultAction.meta.requestStatus === 'fulfilled') {
      onSuccessAuth();
      reset();
      resetTimer(0);
    }
  };

  const onNewOtpClick = async (phone: string, setErrorPhone: (value?: string) => void) => {
    if (phone.length === 0) setErrorPhone('Поле обязательное для заполнения');
    else if (!/\+\d \d\d\d \d\d\d \d\d \d\d/g.test(phone))
      setErrorPhone('Введите телфон в формате +X XXX XXX XX XX');
    else {
      dispatch(AuthActions.createOtp(phone));
    }
  };

  useEffect(() => {
    if (delay !== null) {
      resetTimer(Math.ceil(delay / 1000));
    }
  }, [delay]);

  return {
    isCreateOtpLoading,
    isCheckOtpLoading,
    error,
    seconds,
    delay,
    onFormSubmit,
    onNewOtpClick,
  };
};

export { useAuthForm };
