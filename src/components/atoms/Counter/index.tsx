import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type CounterProps = {
  className?: string;
  onAdd: () => void;
  onMinus: () => void;
  children: ReactNode;
};

const Counter: FC<CounterProps> = ({ className = '', onAdd, onMinus, children }) => {
  return (
    <div className={clsx(style.container, className)}>
      <button className={clsx(style.button, style.button_left)} onClick={onMinus}>
        -
      </button>
      <span className={style.count}>{children}</span>
      <button className={clsx(style.button, style.button_right)} onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export { Counter };
