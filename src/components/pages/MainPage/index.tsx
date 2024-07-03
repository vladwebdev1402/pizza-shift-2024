import clsx from 'clsx';

import { ErrorMessage } from '@/components/atoms';
import { PizzaCard } from '@/components/moleculus';

import style from './style.module.scss';
import { useGetPizzas } from './useGetPizzas';
import { MainPageSkeleton } from './MainPageSkeleton';

const MainPage = () => {
  const { pizzas, isLoading, error } = useGetPizzas();

  const onPizzaSwitch = (id: string) => {};

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
      <div className={clsx('container', style.container)}>
        <div className={style.body}>
          {pizzas.map((pizza) => (
            <PizzaCard
              pizza={pizza}
              onPizzaSwitch={onPizzaSwitch}
              key={pizza.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export { MainPage };
