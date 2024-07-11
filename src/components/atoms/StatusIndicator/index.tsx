import clsx from 'clsx';
import { FC } from 'react';

import style from './style.module.scss';

type StatusIndicatorProps = {
  status: number;
};

const StatusIndicator: FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div className={style.status}>
      <div className={clsx(style.indicator, style[`indicator_${status}`])} />
      {status === 1 && <span>Заказ оформлен</span>}
      {status === 2 && <span>Заказ доставлен</span>}
    </div>
  );
};

export { StatusIndicator };
