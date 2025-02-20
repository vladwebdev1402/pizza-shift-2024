import { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

const Skeleton: FC<ComponentPropsWithoutRef<'div'>> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(style.skeleton, className)} {...props}>
      <span className={clsx(style.child)}>{children}</span>
    </div>
  );
};

export { Skeleton };
