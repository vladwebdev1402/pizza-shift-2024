import clsx from 'clsx';

import { Button, Skeleton, Typography } from '@/components/atoms';

import style from './style.module.scss';

const PizzaCardSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.desktop_container}>
        <Skeleton className={clsx(style.img, style.skeleton_img)} />
        <div className={style.body}>
          <div className={style.info}>
            <Skeleton className={style.skeleton}>
              <Typography variant="h3" tag="span">
                Название пиццы
              </Typography>
            </Skeleton>

            <Skeleton className={style.skeleton}>
              <Typography>
                Шифт пицца с пепперони, колбасой, зеленым перцем, луком, оливками и шампиньонами.
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
      </div>
      <div className={style.mobile_container}>
        <Skeleton className={clsx(style.img, style.skeleton_img)} />

        <div className={style.body}>
          <div className={style.info}>
            <Skeleton className={style.skeleton}>
              <Typography variant="paragraph_16" tag="h3" className={style.title}>
                Название пиццы
              </Typography>
            </Skeleton>
            <Skeleton className={style.skeleton}>
              <Typography variant="paragraph_12" className={style.description}>
                Шифт пицца с пепперони, колбасой, зеленым перцем, луком, оливками и шампиньонами.
              </Typography>
            </Skeleton>
          </div>
          <div className={style.footer}>
            <Skeleton className={style.skeleton}>
              <Typography variant="paragraph_16" tag="div" className={style.price}>
                от 599 ₽
              </Typography>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PizzaCardSkeleton };
