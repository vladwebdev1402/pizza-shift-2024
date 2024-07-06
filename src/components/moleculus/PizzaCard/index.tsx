import { FC } from 'react';

import { Pizza } from '@/types';

import { Button, Typography } from '@/components/atoms';
import { API_URL } from '@/constants';

import { PizzaCardSkeleton } from './PizzaCardSkeleton';
import style from './style.module.scss';

type PizzaCardProps = {
  pizza: Pizza;
  handleSwitchPizza: (id: string) => void;
};

const PizzaCard: FC<PizzaCardProps> = ({ pizza, handleSwitchPizza }) => {
  const onSwitchClick = () => {
    handleSwitchPizza(pizza.id);
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
      <button className={style.mobile_container} onClick={onSwitchClick}>
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
