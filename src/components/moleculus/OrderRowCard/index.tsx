import { FC } from 'react';
import clsx from 'clsx';

import { Button, StatusIndicator, Typography } from '@/components/atoms';
import { Order } from '@/types';

import style from './style.module.scss';

type OrderRowCardProps = {
  order: Order;
  className?: string;
  onMoreClick: (order: Order) => void;
};

const OrderRowCard: FC<OrderRowCardProps> = ({
  order,
  className = '',
  onMoreClick,
}) => {
  return (
    <div className={clsx(style.card, className)}>
      <div>
        <Typography className={style.subtitle} variant="paragraph_12">
          Статус
        </Typography>
        <Typography>
          <StatusIndicator status={order.status} />
        </Typography>
      </div>
      <div>
        <Typography className={style.subtitle} variant="paragraph_12">
          Адрес доставки
        </Typography>
        <Typography>
          {order.receiverAddress.street}, {order.receiverAddress.house},{' '}
          {order.receiverAddress.apartment} г. Новосибирск, ул. Кирова, д. 86
        </Typography>
      </div>
      <div>
        <Typography className={style.subtitle} variant="paragraph_12">
          Состав заказа
        </Typography>
        <Typography>
          {order.pizzas.map((pizza) => (
            <>
              {pizza.name}
              <br />
            </>
          ))}
        </Typography>
      </div>
      <Button
        className={style.button}
        variant="text"
        onClick={() => onMoreClick(order)}
      >
        Подробнее
      </Button>
    </div>
  );
};

export { OrderRowCard };
