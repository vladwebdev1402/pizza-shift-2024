import clsx from 'clsx';
import { ChangeEvent, FC } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/atoms';
import { FormProps, User } from '@/types';
import {
  addressFieldValidate,
  makeMaskedPhone,
  removeAddressSprecCharacters,
  replaceToNumbers,
} from '@/helpers';

import { emailFieldValidate, nameFieldsValidate, removeNamefieldSpecCharacters } from './helpers';
import { ProfileFormSkeleton } from './ProfileFormSkeleton';
import style from './style.module.scss';

type ProfileFormProps = {
  isDisabledPhone?: boolean;
} & FormProps<User>;

const ProfileForm: FC<ProfileFormProps> = ({
  defaultValues,
  isDisabledPhone = false,
  className,
  onSubmit,
  children,
}) => {
  const { register, formState, handleSubmit, setValue, watch } = useForm<User>({
    defaultValues: {
      ...defaultValues,
      phone: makeMaskedPhone(replaceToNumbers(defaultValues?.phone || '')),
    },
  });

  const onLastnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('lastname', removeNamefieldSpecCharacters(e.target.value).slice(0, 60));
  };

  const onFirstnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('firstname', removeNamefieldSpecCharacters(e.target.value).slice(0, 60));
  };

  const onMiddlenameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('middlename', removeNamefieldSpecCharacters(e.target.value).slice(0, 60));
  };

  const onCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('city', removeAddressSprecCharacters(e.target.value));
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('phone', makeMaskedPhone(replaceToNumbers(e.target.value)));
  };

  return (
    <form className={clsx(style.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Фамилия"
        required
        placeholder="Иванов"
        {...register('lastname', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          value: watch('lastname'),
          onChange: onLastnameChange,
          validate: nameFieldsValidate,
        })}
        error={formState.errors.lastname?.message}
      />
      <Input
        label="Имя"
        required
        placeholder="Иван"
        {...register('firstname', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          onChange: onFirstnameChange,
          value: watch('firstname'),
          validate: nameFieldsValidate,
        })}
        error={formState.errors.firstname?.message}
      />
      <Input
        label="Отчество"
        required
        placeholder="Иванович"
        {...register('middlename', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          onChange: onMiddlenameChange,
          value: watch('middlename'),
          validate: nameFieldsValidate,
        })}
        error={formState.errors.middlename?.message}
      />
      <Input
        label="Телефон"
        required
        disabled={isDisabledPhone}
        placeholder="+7 913 123 45 67"
        {...register('phone', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          pattern: {
            value: /\+\d \d\d\d \d\d\d \d\d \d\d/g,
            message: 'Введите телфон в формате +X XXX XXX XX XX',
          },
          value: watch('phone'),
          onChange: onPhoneChange,
        })}
        error={formState.errors.phone?.message}
      />
      <Input
        label="Email"
        type="email"
        placeholder="user@example.com"
        {...register('email', {
          value: watch('email'),
          pattern: {
            value: /([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+)/,
            message: 'Введите почту в формате example@gmail.com',
          },
          validate: emailFieldValidate,
        })}
        error={formState.errors.email?.message}
      />
      <Input
        label="Город"
        placeholder="г. Новосибирск"
        {...register('city', {
          value: watch('city'),
          onChange: onCityChange,
          validate: addressFieldValidate,
        })}
        error={formState.errors.city?.message}
      />
      {children && <div className={style.buttons}>{children}</div>}
    </form>
  );
};

export { ProfileForm, ProfileFormSkeleton };
