import { FC } from 'react';

import { API_URL } from '@/constants';
import {
  NameDoughTranslate,
  NameIngredientsTranslate,
  NameSizeTranslate,
  PizzaOrder,
  SizeToCm,
} from '@/types';
import { Button, Counter, Typography } from '@/components/atoms';
import CrossIcon from '@/assets/decorative/cross.svg?react';

import style from './style.module.scss';
import { getTotalPrice } from './helpers';

type PizzaBasketCardProps = {
  pizza: PizzaOrder;
};

const PizzaBasketCard: FC<PizzaBasketCardProps> = ({ pizza }) => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={API_URL + pizza.img} alt="Изображение пиццы" />
      </div>
      <div className={style.body}>
        <div className={style.info}>
          <Typography className={style.name} tag="div">
            {pizza.name}
          </Typography>
          <Typography
            className={style.description}
            variant="paragraph_14"
            tag="div"
          >
            {NameSizeTranslate[pizza.size.name]}, {SizeToCm[pizza.size.name]},{' '}
            {NameDoughTranslate[pizza.doughs.name].replace(/\D/, (s) =>
              s.toLowerCase(),
            )}
            <br />
            {pizza.toppings.length > 0 && (
              <>
                +{' '}
                {pizza.toppings
                  .map((i) => NameIngredientsTranslate[i.name])
                  .join(', ')
                  .toLowerCase()}
              </>
            )}
          </Typography>
        </div>
        <div className={style.options}>
          <Counter
            onAdd={() => {}}
            onMinus={() => {}}
            className={style.counter}
          >
            1
          </Counter>

          <Button variant="text" className={style.change_button}>
            <Typography variant="paragraph_12">Изменить</Typography>
          </Button>

          <Typography className={style.price}>
            {getTotalPrice(pizza)} ₽
          </Typography>

          <button className={style.delete_button}>
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export { PizzaBasketCard };
