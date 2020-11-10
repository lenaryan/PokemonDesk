import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Nav.module.scss';
import { GENERAL_MENU } from '../../routes';

const Nav = () => {
  const path = usePath();
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        {GENERAL_MENU.map(({ title, link }) => (
          <li key={title}>
            <A
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
