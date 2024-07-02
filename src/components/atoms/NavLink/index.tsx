import { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  to: string;
  type: 'header' | 'footer';
  icon: ReactNode;
  children: ReactNode;
};

const NavLink: FC<Props> = ({ to, type, icon, children }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={clsx(style.link, {
        [style.link_footer]: type === 'footer',
        [style.link_header]: type === 'header',
        [style.link_active]: match,
      })}
    >
      <div className={style.icon}>{icon}</div>
      <span>{children}</span>
    </Link>
  );
};

export { NavLink };
