import { useState } from 'react';
import clsx from 'clsx';

import { Button, ErrorMessage, Modal, Typography } from '@/components/atoms';
import { PizzaCard } from '@/components/moleculus';
import { AuthForm, PizzaInformationModal } from '@/components/organisms';
import CrossIcon from '@/assets/decorative/cross.svg?react';

import { useMainPage } from './useMainPage';
import { MainPageSkeleton } from './MainPageSkeleton';
import style from './style.module.scss';

const MainPage = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const { pizzas, isLoading, error, isAuth, onAddInBasket } = useMainPage();

  const onPizzaSwitch = (id: string) => {
    if (!isAuth) {
      setIsAuthOpen(true);
      return;
    }
    setCurrentId(id);
  };

  if (error) {
    return (
      <div className={clsx('container', style.container)}>
        <ErrorMessage title="Произошла ошибка" description={error} />
      </div>
    );
  }

  if (isLoading) {
    return <MainPageSkeleton />;
  }

  if (pizzas) {
    return (
      <>
        <div className={clsx('container', style.container)}>
          <Typography variant="h2" tag="h2" className={style.page_title}>
            Пицца
          </Typography>
          <div className={style.body}>
            {pizzas.map((pizza) => (
              <PizzaCard pizza={pizza} handleSwitchPizza={onPizzaSwitch} key={pizza.id} />
            ))}
          </div>
        </div>
        <Modal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          isClosable
          isMobileFullScreen
          title={
            <div className={style.modal_title}>
              <Button
                variant="text"
                className={style.modal_button}
                onClick={() => setIsAuthOpen(false)}
              >
                <div className="icon">
                  <CrossIcon />
                </div>
                <Typography variant="h2">Авторизация</Typography>
              </Button>
            </div>
          }
        >
          <Typography className={style.auth_title} variant="h2" tag="h2">
            Авторизация
          </Typography>
          <AuthForm onSuccessAuth={() => setIsAuthOpen(false)} />
        </Modal>
        <PizzaInformationModal
          currentId={currentId}
          onClose={() => setCurrentId(null)}
          onAddInBasket={onAddInBasket}
        />
      </>
    );
  }

  return null;
};

export { MainPage };
