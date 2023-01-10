import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
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
      <Outlet />
    </div>
  );
};
