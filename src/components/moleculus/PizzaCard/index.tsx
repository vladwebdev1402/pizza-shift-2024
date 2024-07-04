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
      <div className={style.desktop_container}>
        <div className={style.img}>
          <img src={API_URL + pizza.img} />
        </div>
        <div className={style.body}>
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
      </div>
      <button
        className={style.mobile_container}
        onClick={() => onPizzaSwitch(pizza.id)}
      >
        <div className={style.img}>
          <img src={API_URL + pizza.img} />
        </div>
        <div className={style.body}>
          <div className={style.info}>
            <Typography variant="paragraph_16" tag="h3" className={style.title}>
              {pizza.name}
            </Typography>
            <Typography variant="paragraph_12" className={style.description}>
              {pizza.description}
            </Typography>
          </div>
          <div className={style.footer}>
            <Typography
              variant="paragraph_16"
              tag="div"
              className={style.price}
            >
              от {pizza.sizes[0].price} ₽
            </Typography>
          </div>
        </div>
      </button>
    </div>
  );
};

export { PizzaCard, PizzaCardSkeleton };
