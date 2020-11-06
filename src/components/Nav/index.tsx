import React from 'react';
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
    link: '/',
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
            <a href={link} className={s.menuLink}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
