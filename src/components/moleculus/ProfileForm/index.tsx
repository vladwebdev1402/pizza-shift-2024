import { ChangeEvent, FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/atoms';
import { User } from '@/types';
import { makeMaskedPhone, replaceToNumbers } from '@/helpers';

import style from './style.module.scss';
import {
  cityFieldValidate,
  emailFieldValidate,
  nameFieldsValidate,
  removeCitySprecCharacters,
  removeNamefieldSpecCharacters,
} from './helpers';

type ProfileFormProps = {
  defaultValues?: User;
  isDisabledPhone?: boolean;
  onSubmit: (data: User) => void;
  buttons?: ReactNode;
};

const ProfileForm: FC<ProfileFormProps> = ({
  defaultValues,
  isDisabledPhone = false,
  onSubmit,
  buttons,
}) => {
  const { register, formState, handleSubmit, setValue, watch } = useForm<User>({
    defaultValues,
  });

  const onLastnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(
      'profile.lastname',
      removeNamefieldSpecCharacters(e.target.value).slice(0, 60),
    );
  };

  const onFirstnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(
      'profile.firstname',
      removeNamefieldSpecCharacters(e.target.value).slice(0, 60),
    );
  };

  const onMiddlenameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(
      'profile.middlename',
      removeNamefieldSpecCharacters(e.target.value).slice(0, 60),
    );
  };

  const onCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('profile.city', removeCitySprecCharacters(e.target.value));
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('phone', makeMaskedPhone(replaceToNumbers(e.target.value)));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Фамилия"
        required
        placeholder="Иванов"
        {...register('profile.lastname', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          value: watch('profile.lastname'),
          onChange: onLastnameChange,
          validate: nameFieldsValidate,
        })}
        error={formState.errors.profile?.lastname?.message}
      />
      <Input
        label="Имя"
        required
        placeholder="Иван"
        {...register('profile.firstname', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          onChange: onFirstnameChange,
          value: watch('profile.firstname'),
          validate: nameFieldsValidate,
        })}
        error={formState.errors.profile?.firstname?.message}
      />
      <Input
        label="Отчество"
        required
        placeholder="Иванович"
        {...register('profile.middlename', {
          required: {
            value: true,
            message: 'Поле обязательно для заполнеия',
          },
          onChange: onMiddlenameChange,
          value: watch('profile.middlename'),
          validate: nameFieldsValidate,
        })}
        error={formState.errors.profile?.middlename?.message}
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
          minLength: {
            value: 11,
            message: 'Длина номера телефона равна 11 символам',
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
        {...register('profile.email', {
          value: watch('profile.email'),
          pattern: {
            value: /([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+)/,
            message: 'Пример почты: example@gmail.com',
          },
          validate: emailFieldValidate,
        })}
        error={formState.errors.profile?.email?.message}
      />
      <Input
        label="Город"
        placeholder="г. Новосибирск"
        {...register('profile.city', {
          value: watch('profile.city'),
          onChange: onCityChange,
          validate: cityFieldValidate,
        })}
        error={formState.errors.profile?.city?.message}
      />
      {buttons && <div className={style.buttons}>{buttons}</div>}
    </form>
  );
};

export { ProfileForm };
