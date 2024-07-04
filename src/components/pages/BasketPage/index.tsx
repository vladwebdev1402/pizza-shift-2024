import { useState } from 'react';
import clsx from 'clsx';

import { PizzaBasketCard } from '@/components/moleculus';
import { PizzaInformationModal } from '@/components/organisms';
import { OrderActions, useAppDispatch, useAppSelector } from '@/store';
import { PizzaOrder } from '@/types';

import style from './style.module.scss';
import { Button, Typography } from '@/components/atoms';
import { calcTotalPrice } from './helpers';

const BasketPage = () => {
  const dispatch = useAppDispatch();
  const [currentPizza, setCurrentPizza] = useState<PizzaOrder | null>(null);
  const basket = useAppSelector((state) => state.OrderReducer.basket);

  const onChangeClick = (pizza: PizzaOrder) => {
    setCurrentPizza(pizza);
  };

  const onAddInBasket = (pizza: PizzaOrder) => {
    if (currentPizza)
      dispatch(
        OrderActions.changePizzaInBasket({
          oldPizza: currentPizza,
          newPizza: pizza,
        }),
      );
  };

  const onIncrement = (pizza: PizzaOrder) => {
    dispatch(
      OrderActions.changeCountPizzaInBasket({
        pizza,
        type: 'increment',
      }),
    );
  };

  const onDecrement = (pizza: PizzaOrder) => {
    dispatch(
      OrderActions.changeCountPizzaInBasket({
        pizza,
        type: 'decrement',
      }),
    );
  };

  const onDelete = (pizza: PizzaOrder) => {
    dispatch(OrderActions.deletePizzaFromBasket(pizza));
  };

  return (
    <>
      <div className={clsx('container', style.container)}>
        <div className={style.pizzas}>
          {basket.map((pizza) => (
            <PizzaBasketCard
              pizza={pizza}
              key={pizza.id}
              onChangeClick={onChangeClick}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </div>
        <div className={style.divider} />
        <div className={style.order}>
          <Typography variant="h2">
            Стоимость заказа: {calcTotalPrice(basket)} ₽
          </Typography>
          <Button className={style.button}>Оформить заказ</Button>
        </div>
      </div>
      <PizzaInformationModal
        currentId={currentPizza?.id || null}
        onAddInBasket={onAddInBasket}
        onClose={() => setCurrentPizza(null)}
        currentPizzaOrder={currentPizza}
      />
    </>
  );
};

export { BasketPage };
