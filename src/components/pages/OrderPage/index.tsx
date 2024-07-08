import { useState } from 'react';
import clsx from 'clsx';

import { OrderCard, OrderRowCard } from '@/components/moleculus';
import { Typography } from '@/components/atoms';
import { useAppSelector } from '@/store';

import { OrderPageSkeleton } from './OrderPageSkeleton';
import style from './style.module.scss';

const OrderPage = () => {
  const [isMoreMode, setIsMoreMode] = useState(false);
  const { orders, isLoading } = useAppSelector((state) => state.OrderReducer);

  if (isLoading) return <OrderPageSkeleton />;

  return (
    <div className={clsx('container', style.container)}>
      {!isMoreMode && (
        <>
          <div className={style.header}>
            <Typography className={style.subtitle} variant="paragraph_14">
              Статус
            </Typography>
            <Typography className={style.subtitle} variant="paragraph_14">
              Адрес доставки
            </Typography>
            <Typography className={style.subtitle} variant="paragraph_14">
              Состав заказа
            </Typography>
          </div>
          <div className={style.body}>
            {orders.map((order) => (
              <OrderRowCard
                order={order}
                onMoreClick={() => {
                  setIsMoreMode(true);
                }}
                className={style.order}
              />
            ))}
          </div>
        </>
      )}
      {isMoreMode && (
        <>
          <Typography variant="h2" tag="h2">
            История
          </Typography>
          <div className={style.body_more}>
            {orders.map((order) => (
              <OrderCard order={order} onCancel={() => {}} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { OrderPage };
