import { useForm } from 'react-hook-form';
import { ChangeEvent, FC } from 'react';
import clsx from 'clsx';

import { Button, Input, Typography } from '@/components/atoms';
import { makeMaskedPhone, replaceToNumbers } from '@/helpers';

import { useAuthForm } from './useAuthForm';
import { AuthData } from './type';
import style from './style.module.scss';

type AuthFormProps = {
  className?: string;
  isShowTitle?: boolean;
  onSuccessAuth?: () => void;
};

const AuthForm: FC<AuthFormProps> = ({
  className,
  isShowTitle,
  onSuccessAuth = () => {},
}) => {
  const {
    formState,
    watch,
    register,
    setValue,
    handleSubmit,
    setError,
    reset,
  } = useForm<AuthData>();

  const {
    delay,
    error,
    isCheckOtpLoading,
    isCreateOtpLoading,
    onFormSubmit,
    onNewOtpClick,
    seconds,
  } = useAuthForm(onSuccessAuth);

  const onSubmit = (data: AuthData) => {
    onFormSubmit(data, reset);
  };

  const setErrorPhone = (value?: string) => {
    setError('phone', { message: value });
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = replaceToNumbers(e.target.value);
    setValue('phone', makeMaskedPhone(value));
  };

  const onOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = replaceToNumbers(e.target.value);
    setValue('otp', value.slice(0, 6));
  };

  return (
    <div className={clsx('container', className)}>
      <div className={style.auth}>
        {isShowTitle && (
          <div className={style.title}>
            <Typography variant="h2" tag="h2">
              Авторизация
            </Typography>
          </div>
        )}
        <Typography className={style.info}>
          Введите номер телефона для входа
          <br /> в личный кабинет
        </Typography>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.group}>
            <Input
              placeholder="+7 913 123 45 67"
              required
              {...register('phone', {
                onChange: onPhoneChange,
                value: watch('phone'),
                required: {
                  value: true,
                  message: 'Поле обязательно для заполнения',
                },
                pattern: {
                  value: /\+\d \d\d\d \d\d\d \d\d \d\d/g,
                  message: 'Введите телфон в формате +X XXX XXX XX XX',
                },
              })}
              error={formState.errors.phone?.message}
            />
            {delay && (
              <Input
                placeholder="Проверочный код"
                required
                error={formState.errors.otp?.message}
                {...register('otp', {
                  onChange: onOtpChange,
                  value: watch('otp'),
                  required: {
                    value: true,
                    message: 'Поле обязательно для заполнения',
                  },
                  minLength: {
                    value: 6,
                    message: 'Код должен содержать 6 цифр',
                  },
                })}
              />
            )}
          </div>
          <div className={clsx(style.group, style.buttons)}>
            <Button
              loading={(!delay && isCreateOtpLoading) || isCheckOtpLoading}
            >
              {delay ? 'Войти' : 'Продолжить'}
            </Button>

            {delay !== null && seconds !== 0 && (
              <Typography variant="paragraph_14" className={style.info}>
                Запросить код повторно можно через {seconds} секунд
              </Typography>
            )}

            {delay !== null && seconds === 0 && (
              <Button
                variant="outlined"
                type="button"
                onClick={() => onNewOtpClick(watch('phone'), setErrorPhone)}
                loading={isCreateOtpLoading}
              >
                Запросить ещё раз
              </Button>
            )}
          </div>
        </form>
        {error && (
          <Typography variant="paragraph_16" className={style.error}>
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};

export { AuthForm };
