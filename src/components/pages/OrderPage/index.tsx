import clsx from 'clsx';

import { OrderCard, OrderRowCard } from '@/components/moleculus';
import { Typography } from '@/components/atoms';
import { useAppSelector } from '@/store';

import style from './style.module.scss';

const OrderPage = () => {
  const orders = useAppSelector((state) => state.OrderReducer.orders);

  return (
    <div className={clsx('container', style.container)}>
      {/* <div className={style.header}>
        <Typography className={style.title} variant="paragraph_14">
          Статус
        </Typography>
        <Typography className={style.title} variant="paragraph_14">
          Адрес доставки
        </Typography>
        <Typography className={style.title} variant="paragraph_14">
          Состав заказа
        </Typography>
      </div>
      <div className={style.body}>
        {orders.map((order) => (
          <OrderRowCard
            order={order}
            onMoreClick={() => {}}
            className={style.order}
          />
        ))}
      </div> */}
      <OrderCard order={orders[0]} onCancel={() => {}} />
    </div>
  );
};

export { OrderPage };
