import { FC } from 'react';
import clsx from 'clsx';

import { Button, Input, Typography } from '@/components/atoms';
import { makeMaskedPhone } from '@/helpers';

import style from './style.module.scss';
import { useAuthForm } from './useAuthForm';

type AuthFormProps = {
  className?: string;
  isShowTitle?: boolean;
  onSuccessAuth: () => void;
};

const AuthForm: FC<AuthFormProps> = ({
  className,
  isShowTitle,
  onSuccessAuth,
}) => {
  const {
    delay,
    error,
    formState,
    handleSubmit,
    isCheckOtpLoading,
    isCreateOtpLoading,
    onFormSubmit,
    onNewOtpClick,
    onOtpChange,
    onPhoneChange,
    register,
    seconds,
    watch,
  } = useAuthForm(onSuccessAuth);

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
        <form className={style.form} onSubmit={handleSubmit(onFormSubmit)}>
          <div className={style.group}>
            <Input
              placeholder="+7 913 123 45 67"
              {...register('phone', {
                onChange: onPhoneChange,
                value: watch('phone'),
                validate: (value) => {
                  const phone = makeMaskedPhone(value);
                  if (phone.length < 11)
                    return 'Длина телефона равна 11 числам';
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
                onClick={onNewOtpClick}
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
