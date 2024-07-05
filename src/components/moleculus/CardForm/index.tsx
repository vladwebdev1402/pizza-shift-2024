import { ChangeEvent, FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';

import { DebitCard } from '@/types';
import { replaceToNumbers } from '@/helpers';
import { Input } from '@/components/atoms';

import { makeExpireDateMask, makePanMask, validateExpireDate } from './helpers';

import style from './style.module.scss';
type CardFormProps = {
  defaultValues?: DebitCard;
  onSuccessSubmit: (data: DebitCard) => void;
  children?: ReactNode;
};

const CardForm: FC<CardFormProps> = ({
  defaultValues,
  onSuccessSubmit,
  children,
}) => {
  const { register, watch, setValue, formState, handleSubmit } = useForm({
    defaultValues,
  });

  const onPanChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('pan', makePanMask(replaceToNumbers(e.target.value)));
  };

  const onExpireDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(
      'expireDate',
      makeExpireDateMask(replaceToNumbers(e.target.value)),
    );
  };

  const onCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('cvv', replaceToNumbers(e.target.value).slice(0, 3));
  };

  return (
    <form onSubmit={handleSubmit(onSuccessSubmit)}>
      <div className={style.card}>
        <Input
          label="Номер"
          required
          placeholder="0000 0000"
          error={formState.errors.pan?.message}
          {...register('pan', {
            value: watch('pan'),
            onChange: onPanChange,
            required: {
              value: true,
              message: 'Поле обязательно для заполнения',
            },
            pattern: {
              value: /\d\d\d\d \d\d\d\d/g,
              message: 'Введите номер карты в формате XXXX XXXX',
            },
          })}
        />
        <div className={style.footer}>
          <Input
            label="Срок"
            required
            placeholder="00/00"
            error={formState.errors.expireDate?.message}
            {...register('expireDate', {
              value: watch('expireDate'),
              onChange: onExpireDateChange,
              required: {
                value: true,
                message: 'Поле обязательно для заполнения',
              },
              pattern: {
                value: /\d\d\/\d\d/g,
                message: 'Введите дату в формате XX/XX',
              },
              validate: validateExpireDate,
            })}
          />
          <Input
            label="CVV"
            required
            placeholder="000"
            error={formState.errors.cvv?.message}
            {...register('cvv', {
              value: watch('cvv'),
              onChange: onCvvChange,
              required: {
                value: true,
                message: 'Поле обязательно для заполнения',
              },
              pattern: {
                value: /\d\d\d/g,
                message: 'Введите CVV в формате XXX',
              },
            })}
          />
        </div>
      </div>
      {children && <div className={style.buttons}>{children}</div>}
    </form>
  );
};

export { CardForm };
