import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import { ROUTER_PATHS } from '@/constants';

import { Layout } from '../Layout';
import { MainPage } from '../MainPage';
import { ProfilePage } from '../ProfilePage';
import { BasketPage } from '../BasketPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTER_PATHS.main} element={<MainPage />} />
      <Route path={ROUTER_PATHS.profile} element={<ProfilePage />} />
      <Route path={ROUTER_PATHS.basket} element={<BasketPage />} />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export { Router };
