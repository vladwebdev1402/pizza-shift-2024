import { Outlet } from 'react-router-dom';

import { Header } from '@/components/organisms';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
