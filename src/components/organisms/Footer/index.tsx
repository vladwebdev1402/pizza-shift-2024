import { NavLink } from '@/components/atoms';
import CircleSVG from '@/assets/decorative/circle.svg?react';
import TimeSVG from '@/assets/decorative/time.svg?react';
import BasketSVG from '@/assets/decorative/basket2.svg?react';
import ProfileSVG from '@/assets/decorative/profile.svg?react';

import style from './style.module.scss';
import { ROUTER_PATHS } from '@/constants';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink to={ROUTER_PATHS.main} icon={<CircleSVG />} type="footer">
              Пицца
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTER_PATHS.orders} icon={<TimeSVG />} type="footer">
              Заказы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTER_PATHS.basket}
              icon={<BasketSVG />}
              type="footer"
            >
              Корзина
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTER_PATHS.profile}
              icon={<ProfileSVG />}
              type="footer"
            >
              Профиль
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
