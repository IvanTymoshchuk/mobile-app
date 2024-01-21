import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Footer } from "../Footer/Footer";
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
