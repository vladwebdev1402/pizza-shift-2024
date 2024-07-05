import { FC } from 'react';

import { API_URL } from '@/constants';
import {
  NameDoughTranslate,
  NameSizeTranslate,
  PizzaBasket,
  SizeToCm,
} from '@/types';
import { Button, Counter, Typography } from '@/components/atoms';
import { calcPricePizzaOrder, makeJoinIngridients } from '@/helpers';
import CrossIcon from '@/assets/decorative/cross.svg?react';

import style from './style.module.scss';

type PizzaBasketCardProps = {
  pizza: PizzaBasket;
  onChangeClick: (pizza: PizzaBasket) => void;
  onIncrement: (pizza: PizzaBasket) => void;
  onDecrement: (pizza: PizzaBasket) => void;
  onDelete: (pizza: PizzaBasket) => void;
};

const PizzaBasketCard: FC<PizzaBasketCardProps> = ({
  pizza,
  onChangeClick,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
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
              <>+ {makeJoinIngridients(pizza.toppings)}</>
            )}
          </Typography>
        </div>
        <div className={style.options}>
          <Counter
            onAdd={() => {
              onIncrement(pizza);
            }}
            onMinus={() => {
              onDecrement(pizza);
            }}
            className={style.counter}
          >
            {pizza.count}
          </Counter>

          <Button
            variant="text"
            className={style.change_button}
            onClick={() => onChangeClick(pizza)}
          >
            <Typography variant="paragraph_12">Изменить</Typography>
          </Button>

          <Typography className={style.price}>
            {calcPricePizzaOrder(pizza)} ₽
          </Typography>

          <button
            className={style.delete_button}
            onClick={() => onDelete(pizza)}
          >
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export { PizzaBasketCard };
