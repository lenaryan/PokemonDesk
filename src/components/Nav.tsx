import React from 'react';
import cn from 'classnames';
import s from '../styles/Nav.module.scss';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        <li>
          <a href="/" className={cn(s.menuLink, s.active)}>
            Home
          </a>
        </li>
        <li>
          <a href="/" className={s.menuLink}>
            Pokédex
          </a>
        </li>
        <li>
          <a href="/" className={s.menuLink}>
            Legendaries
          </a>
        </li>
        <li>
          <a href="/" className={s.menuLink}>
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
