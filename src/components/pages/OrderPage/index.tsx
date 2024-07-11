import { useEffect, useState } from 'react';
import clsx from 'clsx';

import {
  AuthForm,
  OrderCancelModal,
  OrderCard,
  OrderRowCard,
} from '@/components/moleculus';
import { Typography } from '@/components/atoms';
import { OrderActions, useAppDispatch, useAppSelector } from '@/store';

import { OrderPageSkeleton } from './OrderPageSkeleton';
import style from './style.module.scss';

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const [isMoreMode, setIsMoreMode] = useState(false);
  const [currentCancelId, setCurrentCancelId] = useState<string | null>(null);
  const { isAuth } = useAppSelector((state) => state.AuthReducer);
  const { orders, isLoading } = useAppSelector((state) => state.OrderReducer);

  useEffect(() => {
    if (isAuth) {
      dispatch(OrderActions.getOrders());
    }
  }, [isAuth]);

  if (!isAuth)
    return (
      <div className={clsx('container', style.container)}>
        <Typography variant="h2" tag="h2" className={style.title}>
          Авторизация
        </Typography>
        <AuthForm className={style.auth_form} />
      </div>
    );

  if (isLoading) return <OrderPageSkeleton />;

  return (
    <>
      <div className={clsx('container', style.container)}>
        {!isMoreMode && (
          <>
            <Typography
              variant="h2"
              tag="h2"
              className={clsx(style.title, style.title_mobile)}
            >
              Заказы
            </Typography>
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
                  key={order._id}
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
            <Typography variant="h2" tag="h2" className={style.title}>
              Детали заказа
            </Typography>
            <div className={style.body_more}>
              {orders.map((order) => (
                <OrderCard
                  key={order._id}
                  order={order}
                  onCancel={(order) => {
                    setCurrentCancelId(order._id);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <OrderCancelModal
        isOpen={currentCancelId !== null}
        onClose={() => setCurrentCancelId(null)}
        onCancel={() => {
          dispatch(OrderActions.cancelOrder(currentCancelId || ''));
          setCurrentCancelId(null);
        }}
      />
    </>
  );
};

export { OrderPage };
