import { ComponentPropsWithRef, forwardRef } from 'react';

import style from './style.module.scss';
import clsx from 'clsx';

type Props = {
  label: string;
  error?: string;
} & ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, required, ...props }, ref) => {
    return (
      <div>
        <div className={style.label}>
          {label}
          {required && '*'}
        </div>
        <input
          {...props}
          ref={ref}
          required={required}
          className={clsx(style.input, { [style.input_error]: error })}
        />
        {error && <div className={style.error}>{error}</div>}
      </div>
    );
  },
);

export { Input };
