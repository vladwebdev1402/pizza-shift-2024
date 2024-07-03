import { FC } from 'react';
import clsx from 'clsx';

import { Skeleton } from '@/components/atoms';

import style from './style.module.scss';

type ProfileFormSkeletonProps = {
  className?: string;
};

const ProfileFormSkeleton: FC<ProfileFormSkeletonProps> = ({ className }) => {
  return (
    <div className={clsx(style.form, className)}>
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
