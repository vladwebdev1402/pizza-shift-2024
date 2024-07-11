import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components/organisms';

import { useLayout } from './useLayout';

const Layout = () => {
  useLayout();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
