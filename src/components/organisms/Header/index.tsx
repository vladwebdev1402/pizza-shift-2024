import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal, NavLink, Typography } from '@/components/atoms';
import { ROUTER_PATHS } from '@/constants';
import { AuthActions, useAppDispatch, useAppSelector } from '@/store';
import LogoIcon from '@/assets/decorative/logo.svg?react';
import ProfileIcon from '@/assets/decorative/profile.svg?react';
import TimeIcon from '@/assets/decorative/time.svg?react';
import BasketIcon from '@/assets/decorative/basket.svg?react';
import ExitIcon from '@/assets/decorative/exit.svg?react';
import EnterIcon from '@/assets/decorative/enter.svg?react';

import style from './style.module.scss';
import { AuthForm } from '../AuthForm';

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
              <LogoIcon />
            </Link>
            <div className={style.links}>
              <ul className={style.list}>
                <li>
                  <NavLink type="header" icon={<ProfileIcon />} to={ROUTER_PATHS.profile}>
                    Профиль
                  </NavLink>
                </li>
                <li>
                  <NavLink type="header" icon={<TimeIcon />} to={ROUTER_PATHS.orders}>
                    Заказы
                  </NavLink>
                </li>
              </ul>
              <ul className={style.list}>
                <li>
                  <NavLink
                    type="header"
                    icon={<BasketIcon />}
                    to={ROUTER_PATHS.basket}
                    svgStyle="stroke"
                  >
                    Корзина
                  </NavLink>
                </li>
                <li>
                  <button className={style.exit} onClick={onAuthClick}>
                    {isAuth && (
                      <>
                        <ExitIcon />
                        Выйти
                      </>
                    )}
                    {!isAuth && (
                      <>
                        <EnterIcon />
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
        <Typography className={style.auth_title} variant="h2" tag="h2">
          Авторизация
        </Typography>
        <AuthForm onSuccessAuth={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export { Header };
