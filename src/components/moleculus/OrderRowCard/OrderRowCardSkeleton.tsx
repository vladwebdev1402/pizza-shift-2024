import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import {
  Button,
  Skeleton,
  StatusIndicator,
  Typography,
} from '@/components/atoms';

import style from './style.module.scss';

const OrderRowCardSkeleton: FC<ComponentProps<'div'>> = ({
  className = '',
}) => {
  return (
    <div className={clsx(style.card, className)}>
      <div>
        <Skeleton className={clsx(style.skeleton, style.subtitle)}>
          <Typography variant="paragraph_12">Статус</Typography>
        </Skeleton>
        <div>
          <Skeleton className={style.skeleton}>
            <StatusIndicator status={1} />
          </Skeleton>
        </div>
      </div>
      <div>
        <Skeleton className={clsx(style.skeleton, style.subtitle)}>
          <Typography variant="paragraph_12">Адрес доставки</Typography>
        </Skeleton>
        <Skeleton className={style.skeleton}>
          <Typography>
            Улица улица, дом дом, кв квартира г. Новосибирск, ул. Кирова, д. 86
          </Typography>
        </Skeleton>
      </div>
      <div>
        <Skeleton className={clsx(style.skeleton, style.subtitle)}>
          <Typography variant="paragraph_12">Состав заказа</Typography>
        </Skeleton>
        <div>
          <Skeleton className={style.skeleton}>
            <Typography>Пиперони</Typography>
          </Skeleton>
          <br />
          <Skeleton className={style.skeleton}>
            <Typography>Сырная пицца</Typography>
          </Skeleton>
        </div>
      </div>
      <Skeleton className={style.skeleton}>
        <Button className={style.button} variant="text">
          Подробнее
        </Button>
      </Skeleton>
    </div>
  );
};

export { OrderRowCardSkeleton };
