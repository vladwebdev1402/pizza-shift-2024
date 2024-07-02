import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  isFullWidth?: boolean;
  isActive?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Tab: FC<Props> = ({
  isFullWidth = true,
  isActive = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(style.tab, {
        [style.tab_active]: isActive,
        [style.tab_fullWidth]: isFullWidth,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Tab };
