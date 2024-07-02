import { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import clsx from 'clsx';

import style from './style.module.scss';

type NavLinkProps = {
  to: string;
  type: 'header' | 'footer';
  svgStyle?: 'stroke' | 'fill';
  icon: ReactNode;
  children: ReactNode;
};

const NavLink: FC<NavLinkProps> = ({
  to,
  type,
  svgStyle = 'fill',
  icon,
  children,
}) => {
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
      <div
        className={clsx(style.icon, {
          [style.icon_fill]: svgStyle === 'fill',
          [style.icon_stroke]: svgStyle === 'stroke',
        })}
      >
        {icon}
      </div>
      <span>{children}</span>
    </Link>
  );
};

export { NavLink };
