import { useState } from 'react';
import clsx from 'clsx';

import { ErrorMessage, Modal } from '@/components/atoms';
import { AuthForm, PizzaCard } from '@/components/moleculus';
import { PizzaInformationModal } from '@/components/organisms';

import style from './style.module.scss';
import { useGetPizzas } from './useGetPizzas';
import { MainPageSkeleton } from './MainPageSkeleton';

const MainPage = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const { pizzas, isLoading, error, isAuth } = useGetPizzas();

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
          <div className={style.body}>
            {pizzas.map((pizza) => (
              <PizzaCard
                pizza={pizza}
                handleSwitchPizza={onPizzaSwitch}
                key={pizza.id}
              />
            ))}
          </div>
        </div>
        <Modal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          isClosable
          isMobileFullScreen
        >
          <AuthForm isShowTitle />
        </Modal>
        <PizzaInformationModal
          currentId={currentId}
          onClose={() => setCurrentId(null)}
        />
      </>
    );
  }

  return null;
};

export { MainPage };
