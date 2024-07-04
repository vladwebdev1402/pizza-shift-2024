import { FC, useMemo, useState } from 'react';
import clsx from 'clsx';

import { useAppSelector } from '@/store';
import {
  Button,
  IngridientCard,
  Modal,
  Tab,
  Typography,
} from '@/components/atoms';
import { API_URL } from '@/constants';
import {
  Dough,
  Ingredient,
  NameDoughTranslate,
  NameIngredientsTranslate,
  NameSizeTranslate,
  Size,
  SizeToCm,
} from '@/types';

import style from './style.module.scss';

type Props = {
  currentId?: string | null;
  onClose: () => void;
};

const PizzaInformationModal: FC<Props> = ({ currentId, onClose }) => {
  const pizzas = useAppSelector((state) => state.PizzaReducer.pizzas);
  const [currentSize, setCurrentSize] = useState<Size | null>(null);
  const [currentDough, setCurrentDough] = useState<Dough | null>(null);
  const [currentToppings, setCurrentToppings] = useState<Ingredient[]>([]);

  const currentPizza = useMemo(() => {
    if (!pizzas || !currentId) return null;
    const pizza = pizzas.find((pizza) => pizza.id === currentId);
    setCurrentSize(pizza!.sizes[0]);
    setCurrentDough(pizza!.doughs[0]);
    return pizza;
  }, [pizzas, currentId]);

  const onToppingClick = (topping: Ingredient) => {
    if (
      currentToppings.find((item) => item.name === topping.name) !== undefined
    ) {
      setCurrentToppings(
        currentToppings.filter((item) => item.name !== topping.name),
      );
      return;
    }

    setCurrentToppings([...currentToppings, topping]);
  };

  return (
    <Modal
      bodyClassName={style.modal}
      isOpen={!!currentPizza}
      onClose={onClose}
      size="large"
      isClosable
      isMobileFullScreen
    >
      {currentPizza && currentSize && currentDough && (
        <div className={style.container}>
          <div className={style.img}>
            <img src={API_URL + currentPizza.img} alt="Изображение пиццы" />
          </div>
          <div className={style.pizza}>
            <div className={style.scroll_container}>
              <div className={style.information}>
                <Typography variant="h2" tag="h2" className={style.title}>
                  {currentPizza.name}
                </Typography>
                <Typography
                  variant="paragraph_14"
                  className={style.description}
                >
                  {SizeToCm[currentSize.name]},{' '}
                  {NameDoughTranslate[currentDough.name]}
                </Typography>
                <Typography className={style.description}>
                  {currentPizza.ingredients
                    .map((ing) => NameIngredientsTranslate[ing.name])
                    .join(', ')
                    .toLowerCase()
                    .replace(/^\D/, (s) => s.toUpperCase())}
                </Typography>
              </div>

              <div className={clsx('tab_container', style.tab_container)}>
                {currentPizza.sizes.map((size) => (
                  <Tab
                    isActive={size.name === currentSize.name}
                    onClick={() => setCurrentSize(size)}
                    key={size.name}
                    className={style.tab}
                  >
                    {NameSizeTranslate[size.name]}
                  </Tab>
                ))}
              </div>

              <div className={style.toppings}>
                <Typography className={style.title}>
                  Добавить по вкусу
                </Typography>
                <div className={style.body}>
                  {currentPizza.toppings.map((topping) => (
                    <IngridientCard
                      isActive={
                        currentToppings.find(
                          (item) => item.name === topping.name,
                        ) !== undefined
                      }
                      ingridient={topping}
                      onClick={onToppingClick}
                      key={topping.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Button className={style.button}>Добавить в корзину</Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export { PizzaInformationModal };
