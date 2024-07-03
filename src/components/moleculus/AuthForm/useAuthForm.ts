import { useForm } from 'react-hook-form';
import { ChangeEvent, useEffect } from 'react';

import { makeMaskedPhone, replaceToNumbers } from '@/helpers';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import { useTimer } from '@/hooks';

type AuthData = {
  phone: string;
  otp: string;
};

const useAuthForm = (onSuccessAuth: () => void) => {
  const dispatch = useAppDispatch();
  const { isCreateOtpLoading, delay, isCheckOtpLoading, error } =
    useAppSelector((state) => state.AuthReducer);
  const { seconds, resetTimer } = useTimer(0);

  const {
    formState,
    watch,
    register,
    setValue,
    handleSubmit,
    setError,
    reset,
  } = useForm<AuthData>();

  const onFormSubmit = async (data: AuthData) => {
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
    }
  };

  const onNewOtpClick = async () => {
    const phone = replaceToNumbers(watch('phone'));
    if (phone.length === 0)
      setError('phone', { message: 'Поле обязательное для заполнения' });
    else if (phone.length < 11)
      setError('phone', { message: 'Длина телефона равна 11 числам' });
    else {
      dispatch(AuthActions.createOtp(phone));
    }
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = replaceToNumbers(e.target.value);
    setValue('phone', makeMaskedPhone(value));
  };

  const onOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = replaceToNumbers(e.target.value);
    setValue('otp', value.slice(0, 6));
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
    formState,
    delay,
    register,
    handleSubmit,
    onFormSubmit,
    onNewOtpClick,
    onPhoneChange,
    onOtpChange,
    watch,
  };
};

export { useAuthForm };
