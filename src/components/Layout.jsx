import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};