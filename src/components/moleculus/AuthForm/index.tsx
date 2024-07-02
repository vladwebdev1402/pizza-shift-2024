import { ChangeEvent, FC, ReactNode } from 'react';
import clsx from 'clsx';

import { Button, Input, Typography } from '@/components/atoms';
import { useAppSelector } from '@/store';
import { makeMaskedPhone, replaceToNumbers } from '@/helpers';

import style from './style.module.scss';
import { useForm } from 'react-hook-form';

type AuthData = {
  phone: string;
  otp: string;
};

type AuthFormProps = {
  className?: string;
  title?: ReactNode;
};

const AuthForm: FC<AuthFormProps> = ({ className, title }) => {
  const { otp } = useAppSelector((state) => state.AuthReducer);

  const { formState, watch, register, setValue, handleSubmit } =
    useForm<AuthData>();

  const onFormSubmit = (data: AuthData) => {
    console.log(data);
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
            {otp && (
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
            <Button>Войти</Button>
            {/* <Button variant="outlined">Запросить ещё раз</Button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export { AuthForm };
