import { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';

import { Skeleton } from '@/components/atoms';

import style from './style.module.scss';

const ProfileFormSkeleton: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  return (
    <div {...props} className={clsx(style.form, className)}>
      <Skeleton className={style.skeleton} />
      <Skeleton className={style.skeleton} />
      <Skeleton className={style.skeleton} />
      <Skeleton className={style.skeleton} />
      <Skeleton className={style.skeleton} />
      <Skeleton className={style.skeleton} />
    </div>
  );
};

export { ProfileFormSkeleton };
