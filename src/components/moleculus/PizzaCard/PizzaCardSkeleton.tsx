import { Button, Skeleton, Typography } from '@/components/atoms';

import style from './style.module.scss';

const PizzaCardSkeleton = () => {
  return (
    <div className={style.container}>
      <Skeleton className={style.img} />
      <div className={style.info}>
        <Skeleton className={style.skeleton}>
          <Typography variant="h3" tag="span">
            Название пиццы
          </Typography>
        </Skeleton>

        <Skeleton className={style.skeleton}>
          <Typography>
            Шифт пицца с пепперони, колбасой, зеленым перцем, луком, оливками и
            шампиньонами.
          </Typography>
        </Skeleton>
      </div>
      <div className={style.footer}>
        <Skeleton className={style.skeleton}>
          <Typography variant="h3" tag="span">
            от 999 ₽
          </Typography>
        </Skeleton>
        <Skeleton>
          <Button>Выбрать</Button>
        </Skeleton>
      </div>
    </div>
  );
};

export { PizzaCardSkeleton };
