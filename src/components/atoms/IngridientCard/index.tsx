import clsx from 'clsx';
import { FC } from 'react';

import { Ingredient, NameIngredientsTranslate } from '@/types';
import { API_URL } from '@/constants';

import style from './style.module.scss';
import { Typography } from '../Typography';

type IngridientCardProps = {
  ingridient: Ingredient;
  isActive?: boolean;
  handleChooseIngridient?: (topping: Ingredient) => void;
};

const IngridientCard: FC<IngridientCardProps> = ({
  ingridient,
  isActive = false,
  handleChooseIngridient = () => {},
}) => {
  return (
    <button
      className={clsx(style.ingridient, {
        [style.ingridient_active]: isActive,
      })}
      onClick={() => handleChooseIngridient(ingridient)}
    >
      <div className={style.img}>
        <img src={API_URL + ingridient.img} alt="Изображение ингридиента" />
      </div>
      <Typography variant="paragraph_12" className={style.name}>
        {NameIngredientsTranslate[ingridient.name]}
      </Typography>
      <Typography variant="paragraph_14" className={style.cost}>
        {ingridient.cost} ₽
      </Typography>
    </button>
  );
};

export { IngridientCard };
