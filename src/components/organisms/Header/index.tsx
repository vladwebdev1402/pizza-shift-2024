import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal, NavLink } from '@/components/atoms';
import { AuthForm } from '@/components/moleculus';
import { ROUTER_PATHS } from '@/constants';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import LogoSVG from '@/assets/decorative/logo.svg?react';
import ProfileSVG from '@/assets/decorative/profile.svg?react';
import TimeSVG from '@/assets/decorative/time.svg?react';
import BasketSVG from '@/assets/decorative/basket.svg?react';
import ExitSVG from '@/assets/decorative/exit.svg?react';
import EnterSVG from '@/assets/decorative/enter.svg?react';

import style from './style.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useAppSelector((state) => state.AuthReducer.isAuth);

  const onAuthClick = () => {
    if (!isAuth) setIsOpen(true);
    else dispatch(AuthActions.signOut());
  };

  return (
    <>
      <header className={style.header}>
        <div className={'container'}>
          <nav className={style.nav}>
            <Link to={ROUTER_PATHS.main}>
              <LogoSVG />
            </Link>
            <div className={style.links}>
              <ul className={style.list}>
                <li>
                  <NavLink
                    type="header"
                    icon={<ProfileSVG />}
                    to={ROUTER_PATHS.profile}
                  >
                    Профиль
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    type="header"
                    icon={<TimeSVG />}
                    to={ROUTER_PATHS.orders}
                  >
                    Заказы
                  </NavLink>
                </li>
              </ul>
              <ul className={style.list}>
                <li>
                  <NavLink
                    type="header"
                    icon={<BasketSVG />}
                    to={ROUTER_PATHS.orders}
                    svgStyle="stroke"
                  >
                    Корзина
                  </NavLink>
                </li>
                <li>
                  <button className={style.exit} onClick={onAuthClick}>
                    {isAuth && (
                      <>
                        <ExitSVG />
                        Выйти
                      </>
                    )}
                    {!isAuth && (
                      <>
                        <EnterSVG />
                        Войти
                      </>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AuthForm isShowTitle onSuccessAuth={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export { Header };
