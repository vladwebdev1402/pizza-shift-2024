import { FC } from 'react';

import { Pizza } from '@/types';

import { Button, Typography } from '@/components/atoms';
import { API_URL } from '@/constants';

import style from './style.module.scss';
import { PizzaCardSkeleton } from './PizzaCardSkeleton';

type PizzaCardProps = {
  pizza: Pizza;
  onPizzaSwitch: (id: string) => void;
};

const PizzaCard: FC<PizzaCardProps> = ({ pizza, onPizzaSwitch }) => {
  const onSwitchClick = () => {
    onPizzaSwitch(pizza.id);
  };

  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={API_URL + pizza.img} />
      </div>
      <div className={style.info}>
        <Typography variant="h3" tag="h3" className={style.title}>
          {pizza.name}
        </Typography>
        <Typography className={style.description}>
          {pizza.description}
        </Typography>
      </div>
      <div className={style.footer}>
        <Typography variant="h3" tag="div" className={style.price}>
          от {pizza.sizes[0].price} ₽
        </Typography>
        <Button onClick={onSwitchClick}>Выбрать</Button>
      </div>
    </div>
  );
};

export { PizzaCard, PizzaCardSkeleton };
