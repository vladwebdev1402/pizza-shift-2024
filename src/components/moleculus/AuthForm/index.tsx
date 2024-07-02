import { useForm } from 'react-hook-form';
import { ChangeEvent, FC, ReactNode, useEffect } from 'react';
import clsx from 'clsx';

import { Button, Input, Typography } from '@/components/atoms';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import { makeMaskedPhone, replaceToNumbers } from '@/helpers';

import style from './style.module.scss';
import { useTimer } from './useTimer';

type AuthData = {
  phone: string;
  otp: string;
};

type AuthFormProps = {
  className?: string;
  title?: ReactNode;
};

const AuthForm: FC<AuthFormProps> = ({ className, title }) => {
  const dispatch = useAppDispatch();
  const { isCreateOtpLoading, delay } = useAppSelector(
    (state) => state.AuthReducer,
  );
  const { seconds, resetTimer } = useTimer(120);

  const { formState, watch, register, setValue, handleSubmit } =
    useForm<AuthData>();

  const onFormSubmit = (data: AuthData) => {
    if (delay === null) {
      dispatch(AuthActions.createOtp(data.phone));
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
  }, [delay, resetTimer]);

  return (
    <div className={clsx('container', className)}>
      <div className={style.auth}>
        {title && <div className={style.title}>{title}</div>}
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
            <Button loading={isCreateOtpLoading}>
              {delay ? 'Войти' : 'Продолжить'}
            </Button>
            {delay !== null && seconds !== 0 && (
              <Typography variant="paragraph_14" className={style.info}>
                Запросить код повторно можно через {seconds} секунд
              </Typography>
            )}

            {delay !== null && seconds === 0 && (
              <Button variant="outlined">Запросить ещё раз</Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export { AuthForm };
