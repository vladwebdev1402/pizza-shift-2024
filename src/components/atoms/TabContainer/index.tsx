import { FC, ReactNode } from 'react';

import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

const TabContainer: FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export { TabContainer };
