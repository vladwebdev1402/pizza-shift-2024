import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { PizzaBasketCard } from '@/components/moleculus';
import { PizzaInformationModal } from '@/components/organisms';
import { Button, ErrorMessage, Typography } from '@/components/atoms';
import { ROUTER_PATHS } from '@/constants';

import { calcTotalPrice } from './helpers';
import { useBasketPage } from './useBasketPage';
import style from './style.module.scss';

const BasketPage = () => {
  const navigate = useNavigate();

  const {
    basket,
    currentPizza,
    onAddInBasket,
    onChangeClick,
    onDecrement,
    onDelete,
    onIncrement,
    clearCurrentPizza,
  } = useBasketPage();

  if (basket.length > 0)
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
            <Typography variant="h2" className={style.price}>
              Стоимость заказа: {calcTotalPrice(basket)} ₽
            </Typography>
            <Button
              className={style.button}
              onClick={() => navigate(ROUTER_PATHS.payment)}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
        <PizzaInformationModal
          currentId={currentPizza?.id || null}
          onAddInBasket={onAddInBasket}
          currentPizzaBasket={currentPizza}
          onClose={clearCurrentPizza}
        />
      </>
    );

  return (
    <div className={clsx('container', style.container)}>
      <ErrorMessage
        title="Корзина пустая"
        description="Добавьте пиццу в корзину"
      />
    </div>
  );
};

export { BasketPage };
