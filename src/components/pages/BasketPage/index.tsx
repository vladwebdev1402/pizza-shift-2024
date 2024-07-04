import clsx from 'clsx';

import { PizzaBasketCard } from '@/components/moleculus';
import { useAppSelector } from '@/store';

import style from './style.module.scss';

const BasketPage = () => {
  const basket = useAppSelector((state) => state.OrderReducer.basket);
  return (
    <div className={clsx('container', style.container)}>
      <div className={style.pizzas}>
        {basket.map((pizza) => (
          <PizzaBasketCard pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
};

export { BasketPage };
