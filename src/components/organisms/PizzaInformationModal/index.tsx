import { FC } from 'react';
import clsx from 'clsx';

import {
  Button,
  IngridientCard,
  Modal,
  Tab,
  Typography,
} from '@/components/atoms';
import { API_URL } from '@/constants';
import {
  NameDoughTranslate,
  NameIngredientsTranslate,
  NameSizeTranslate,
  PizzaOrder,
  SizeToCm,
} from '@/types';

import style from './style.module.scss';
import { usePizza } from './usePizza';

type Props = {
  currentId: string | null;
  currentPizzaOrder?: PizzaOrder | null;
  onClose: () => void;
  onAddInBasket: (pizza: PizzaOrder) => void;
};

const PizzaInformationModal: FC<Props> = ({
  currentId,
  currentPizzaOrder = null,
  onClose,
  onAddInBasket,
}) => {
  const {
    currentToppings,
    currentDough,
    currentPizza,
    currentSize,
    onSizeClick,
    onToppingClick,
    onAddBasket,
  } = usePizza(currentId, currentPizzaOrder, onAddInBasket);

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
                    onClick={() => onSizeClick(size)}
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
            <Button
              className={style.button}
              onClick={() => {
                onAddBasket();
                onClose();
              }}
            >
              Добавить в корзину
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export { PizzaInformationModal };
