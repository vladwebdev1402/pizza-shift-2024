import { NavLink } from '@/components/atoms';
import { ROUTER_PATHS } from '@/constants';
import CircleIcon from '@/assets/decorative/circle.svg?react';
import TimeIcon from '@/assets/decorative/time.svg?react';
import BasketIcon from '@/assets/decorative/basket2.svg?react';
import ProfileIcon from '@/assets/decorative/profile.svg?react';

import style from './style.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink to={ROUTER_PATHS.main} icon={<CircleIcon />} type="footer" svgStyle="stroke">
              Пицца
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.orders} icon={<TimeIcon />} type="footer">
              Заказы
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.basket} icon={<BasketIcon />} type="footer">
              Корзина
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.profile} icon={<ProfileIcon />} type="footer">
              Профиль
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
