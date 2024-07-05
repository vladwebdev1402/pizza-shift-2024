import clsx from 'clsx';

import { PizzaCardSkeleton } from '@/components/moleculus';

import style from './style.module.scss';

const MainPageSkeleton = () => {
  return (
    <div className={clsx('container', style.container)}>
      <div className={style.body}>
        <PizzaCardSkeleton />
        <PizzaCardSkeleton />
        <PizzaCardSkeleton />
        <PizzaCardSkeleton />
        <PizzaCardSkeleton />
        <PizzaCardSkeleton />
      </div>
    </div>
  );
};

export { MainPageSkeleton };
