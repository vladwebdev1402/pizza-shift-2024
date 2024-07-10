import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type StatusIndicatorProps = {
  status: number;
};

const StatusIndicator: FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div className={style.status}>
      <div className={clsx(style.indicator, style[`indicator_${status}`])} />
      {status === 0 && <span>Заказ оформлен</span>}
      {status === 1 && <span>Ожидается курьер</span>}
      {status === 2 && <span>В пути</span>}
      {status === 3 && <span>Заказ доставлен</span>}
      {status === 4 && <span>Заказ отменён</span>}
    </div>
  );
};

export { StatusIndicator };
