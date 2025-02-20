import { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';
import { Loader } from '../Loader';

type ButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  iconPosition?: 'center' | 'start';
  loading?: boolean;
  icon?: ReactNode;
} & ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  iconPosition = 'center',
  loading = false,
  className = '',
  icon,
  children,
  disabled,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || loading}
    className={clsx(style.button, style[variant], style[iconPosition], className)}
  >
    {loading && <Loader />}
    {!loading && icon && <span className={style.icon}>{icon}</span>}
    {!loading && children}
  </button>
);

export { Button };
export type { ButtonProps };
