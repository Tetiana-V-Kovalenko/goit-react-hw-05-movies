import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { TailSpin } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <TailSpin
            height="80"
            width="80"
            color="brown"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
