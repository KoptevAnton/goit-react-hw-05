import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import s from './Navigation.module.css';

function generateStyle({ isActive }) {
  return clsx(s.navLink, isActive && s.active);
}

const containerNav = clsx('container', s.nav);

const Navigation = () => {
  return (
    <nav className={containerNav}>
      <NavLink to="/" className={generateStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" className={generateStyle}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
