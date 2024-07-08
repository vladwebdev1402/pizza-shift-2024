import { ChangeEvent, FC } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { Input } from '@/components/atoms';
import { Address, FormProps } from '@/types';
import { addressFieldValidate, removeAddressSprecCharacters } from '@/helpers';

import style from './style.module.scss';

const AddressForm: FC<FormProps<Address>> = ({
  className,
  defaultValues,
  onSubmit,
  children,
}) => {
  const { register, handleSubmit, setValue, watch, formState } =
    useForm<Address>({
      defaultValues,
    });

  const onStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('street', removeAddressSprecCharacters(e.target.value));
  };

  const onHouseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('house', removeAddressSprecCharacters(e.target.value));
  };

  const onApartmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('apartment', removeAddressSprecCharacters(e.target.value));
  };

  return (
    <form
      className={clsx(style.form, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Улица"
        required
        placeholder="Улица"
        error={formState.errors.street?.message}
        {...register('street', {
          onChange: onStreetChange,
          value: watch('street'),
          validate: addressFieldValidate,
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
        })}
      />
      <Input
        label="Номер дома"
        required
        placeholder="Дом"
        error={formState.errors.house?.message}
        {...register('house', {
          onChange: onHouseChange,
          value: watch('house'),
          validate: addressFieldValidate,
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
        })}
      />
      <Input
        label="Номер квартиры"
        required
        placeholder="Квартира"
        error={formState.errors.apartment?.message}
        {...register('apartment', {
          onChange: onApartmentChange,
          value: watch('apartment'),
          validate: addressFieldValidate,
          required: {
            value: true,
            message: 'Поле обязательно для заполнения',
          },
        })}
      />
      <Input
        label="Заметка"
        placeholder="Заметка для курьера"
        {...register('comment')}
      />
      {children && <div className={style.buttons}>{children}</div>}
    </form>
  );
};

export { AddressForm };
