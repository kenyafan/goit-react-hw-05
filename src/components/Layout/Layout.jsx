import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
