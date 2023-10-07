import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { LayoutWrapper } from './Layout.styled';
import { Watch } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <LayoutWrapper>
          <Suspense fallback={<Watch />}>
            <Outlet />
          </Suspense>
        </LayoutWrapper>
      </main>
    </>
  );
};
