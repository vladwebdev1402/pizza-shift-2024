import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type SkeletonProps = {
  display?: 'block' | 'inline';
} & ComponentProps<'div'>;

const Skeleton: FC<SkeletonProps> = ({
  display = 'block',
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(style.skeleton, style[display], className)} {...props}>
      <span className={clsx(style.child)}>{children}</span>
    </div>
  );
};

export { Skeleton };
