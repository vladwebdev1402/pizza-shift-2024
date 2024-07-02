import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  className?: string;
  isActive?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Tab: FC<Props> = ({
  className = '',
  isActive = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(className, style.tab, {
        [style.tab_active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Tab };
