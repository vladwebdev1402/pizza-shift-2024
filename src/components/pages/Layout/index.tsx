import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components/organisms';

const Layout = () => {
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
