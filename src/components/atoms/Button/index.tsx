import { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';
import { Loader } from '../Loader';

type ButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  iconPosition?: 'center' | 'start';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
} & ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  iconPosition = 'center',
  fullWidth = false,
  loading = false,
  className = '',
  icon,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(className, style.button, {
        [style.button_contained]: variant === 'contained',
        [style.button_outlined]: variant === 'outlined',
        [style.button_text]: variant === 'text',
        [style.button_fullWidth]: fullWidth,
        [style.button_iconCenter]: iconPosition === 'center',
        [style.button_iconStart]: iconPosition === 'start',
      })}
    >
      {loading && <Loader />}
      {!loading && icon && <span className={style.icon}>{icon}</span>}
      {!loading && children}
    </button>
  );
};

export { Button };
