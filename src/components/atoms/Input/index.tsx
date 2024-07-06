import { ComponentPropsWithRef, forwardRef, useId } from 'react';

import style from './style.module.scss';
import clsx from 'clsx';

type InputProps = {
  label?: string;
  error?: string;
  containerClassName?: string;
} & ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, required, containerClassName, className, ...props },
    ref,
  ) => {
    const id = useId();

    return (
      <label className={containerClassName} htmlFor={id}>
        {label && (
          <div className={style.label}>
            {label}
            {required && '*'}
          </div>
        )}
        <input
          {...props}
          id={id}
          ref={ref}
          required={required}
          className={clsx(
            style.input,
            { [style.input_error]: error },
            className,
          )}
        />
        {error && <p className={style.error}>{error}</p>}
      </label>
    );
  },
);

export { Input };
