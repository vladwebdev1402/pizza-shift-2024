import { FC } from 'react';

import { Button, StatusIndicator, Typography } from '@/components/atoms';
import {
  NameDoughTranslate,
  NameSizeTranslate,
  Order,
  SizeToCm,
} from '@/types';
import { makeJoinIngridients } from '@/helpers';

import style from './style.module.scss';
import { calcOrderPrice } from './helpers';

type OrderCardProps = {
  order: Order;
  onCancel: (order: Order) => void;
};

const OrderCard: FC<OrderCardProps> = ({ order, onCancel }) => {
  return (
    <div className={style.order}>
      <div>
        <Typography className={style.title} variant="paragraph_12">
          Статус
        </Typography>
        <StatusIndicator status={order.status} />
      </div>
      <div>
        <Typography className={style.title} variant="paragraph_12">
          Адрес доставки
        </Typography>
        <Typography>
          {order.receiverAddress.street}, {order.receiverAddress.house},{' '}
          {order.receiverAddress.apartment}
        </Typography>
      </div>
      <div>
        <Typography className={style.title} variant="paragraph_12">
          Состав заказа
        </Typography>
        {order.pizzas.map((pizza) => (
          <Typography>
            {pizza.name},{NameSizeTranslate[pizza.size.name]},{' '}
            {SizeToCm[pizza.size.name]},{' '}
            {NameDoughTranslate[pizza.doughs.name].replace(/\D/, (s) =>
              s.toLowerCase(),
            )}
            {pizza.toppings.length > 0 && (
              <>+ {makeJoinIngridients(pizza.toppings)}</>
            )}
          </Typography>
        ))}
      </div>
      <div>
        <Typography className={style.title} variant="paragraph_12">
          Сумма заказа
        </Typography>
        <Typography>{calcOrderPrice(order.pizzas)} ₽</Typography>
      </div>
      {order.cancellable && (
        <Button onClick={() => onCancel(order)} className={style.button}>
          Отменить заказ
        </Button>
      )}
    </div>
  );
};

export { OrderCard };
