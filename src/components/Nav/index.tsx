import React from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/',
  },
];

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        {MENU.map(({ value, link, id }) => (
          <li key={id}>
            <Link to={link} className={s.menuLink}>
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
