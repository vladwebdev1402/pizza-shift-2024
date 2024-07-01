import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  variant?: 'contained' | 'outlined' | 'text';
} & ComponentProps<'button'>;

const Button: FC<Props> = ({ variant = 'contained', children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(style.button, {
        [style.button_contained]: variant === 'contained',
        [style.button_outlined]: variant === 'outlined',
        [style.button_text]: variant === 'text',
      })}
    >
      {children}
    </button>
  );
};

export { Button };
