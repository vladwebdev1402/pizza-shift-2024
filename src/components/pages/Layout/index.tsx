import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components/organisms';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export { Layout };
