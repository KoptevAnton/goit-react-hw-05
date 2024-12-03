import { NavLink } from 'react-router-dom';
// import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};

export default Navigation;
