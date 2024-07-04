import { FC, useMemo, useState } from 'react';

import { useAppSelector } from '@/store';
import { Modal, Tab, Typography } from '@/components/atoms';
import { API_URL } from '@/constants';
import {
  NameDough,
  NameDoughTranslate,
  NameIngredientsTranslate,
  NameSizes,
  NameSizeTranslate,
  SizeToCm,
} from '@/types';

import style from './style.module.scss';
import clsx from 'clsx';

type Props = {
  currentId?: string | null;
  onClose: () => void;
};

const PizzaInformationModal: FC<Props> = ({ currentId, onClose }) => {
  const pizzas = useAppSelector((state) => state.PizzaReducer.pizzas);
  const [currentSize, setCurrentSize] = useState<NameSizes>('SMALL');
  const [currentDough, setCurrentDough] = useState<NameDough>('THICK');

  const currentPizza = useMemo(() => {
    if (!pizzas || !currentId) return null;
    const pizza = pizzas.find((pizza) => pizza.id === currentId);
    setCurrentSize(pizza!.sizes[0].name);
    setCurrentDough(pizza!.doughs[0].name);
    return pizza;
  }, [pizzas, currentId]);

  return (
    <Modal
      isOpen={!!currentPizza}
      onClose={onClose}
      size="large"
      isClosable
      isMobileFullScreen
    >
      {currentPizza && (
        <div className={style.container}>
          <div className={style.img}>
            <img src={API_URL + currentPizza.img} alt="Изображение пиццы" />
          </div>
          <div className={style.information}>
            <Typography variant="h2" tag="h2">
              {currentPizza.name}
            </Typography>
            <Typography variant="paragraph_14" className={style.size_info}>
              {SizeToCm[currentSize]}, {NameDoughTranslate[currentDough]}
            </Typography>
            <Typography className={style.ingridients}>
              {currentPizza.ingredients
                .map((ing) => NameIngredientsTranslate[ing.name])
                .join(', ')
                .toLowerCase()
                .replace(/^\D/, (s) => s.toUpperCase())}
            </Typography>
            <div className={clsx('tab_container', style.tab_container)}>
              {currentPizza.sizes.map((size) => (
                <Tab
                  isActive={size.name === currentSize}
                  onClick={() => setCurrentSize(size.name)}
                  key={size.name}
                  className={style.tab}
                >
                  {NameSizeTranslate[size.name]}
                </Tab>
              ))}
            </div>
            <div className={clsx('tab_container', style.tab_container)}>
              {currentPizza.doughs.map((doughs) => (
                <Tab
                  isActive={doughs.name === currentDough}
                  onClick={() => setCurrentDough(doughs.name)}
                  key={doughs.name}
                  className={style.tab}
                >
                  {NameDoughTranslate[doughs.name]}
                </Tab>
              ))}
            </div>
            <div className={style.additives}></div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export { PizzaInformationModal };
