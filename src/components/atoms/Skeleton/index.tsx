import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type SkeletonProps = {
  //   rounded?: boolean;
} & ComponentProps<'div'>;

const Skeleton: FC<SkeletonProps> = ({
  //   rounded,
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(style.skeleton, className)} {...props}>
      {children}
    </div>
  );
};

export { Skeleton };
