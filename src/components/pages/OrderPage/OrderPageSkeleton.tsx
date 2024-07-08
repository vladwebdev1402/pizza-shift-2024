import clsx from 'clsx';

import { Skeleton, Typography } from '@/components/atoms';
import { OrderRowCardSkeleton } from '@/components/moleculus';

import style from './style.module.scss';

const OrderPageSkeleton = () => {
  return (
    <div className={clsx('container', style.container)}>
      <div className={style.header}>
        <Skeleton className={style.skeleton}>
          <Typography className={style.subtitle} variant="paragraph_14">
            Статус
          </Typography>
        </Skeleton>
        <Skeleton className={style.skeleton}>
          <Typography className={style.subtitle} variant="paragraph_14">
            Адрес доставки
          </Typography>
        </Skeleton>
        <Skeleton className={style.skeleton}>
          <Typography className={style.subtitle} variant="paragraph_14">
            Состав заказа
          </Typography>
        </Skeleton>
      </div>
      <div className={style.body}>
        <OrderRowCardSkeleton className={style.order} />
        <OrderRowCardSkeleton className={style.order} />
        <OrderRowCardSkeleton className={style.order} />
        <OrderRowCardSkeleton className={style.order} />
        <OrderRowCardSkeleton className={style.order} />
        <OrderRowCardSkeleton className={style.order} />
      </div>
    </div>
  );
};

export { OrderPageSkeleton };
