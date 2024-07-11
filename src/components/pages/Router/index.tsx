import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import { useAppSelector } from '@/store';
import { ROUTER_PATHS } from '@/constants';

import { Layout } from '../Layout';
import { MainPage } from '../MainPage';
import { ProfilePage } from '../ProfilePage';
import { BasketPage } from '../BasketPage';
import { PaymentPage } from '../PaymentPage';
import { OrderPage } from '../OrderPage';

const createRouter = (isAuth: boolean) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path={ROUTER_PATHS.main} element={<MainPage />} />
        <Route path={ROUTER_PATHS.profile} element={<ProfilePage />} />
        <Route path={ROUTER_PATHS.basket} element={<BasketPage />} />
        <Route path={ROUTER_PATHS.orders} element={<OrderPage />} />
        {isAuth && <Route path={ROUTER_PATHS.payment} element={<PaymentPage />} />}
      </Route>,
    ),
  );

const Router = () => {
  const isAuth = useAppSelector((state) => state.AuthReducer.isAuth);

  return <RouterProvider router={createRouter(isAuth)} />;
};

export { Router };
