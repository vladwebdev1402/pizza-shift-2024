import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import { ROUTER_PATHS } from '@/constants';

import { Layout } from '../Layout';
import { MainPage } from '../MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTER_PATHS.main} element={<MainPage />} />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export { Router };
