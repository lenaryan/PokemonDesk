import React from 'react';
import cn from 'classnames';
import { ReactComponent as Logo } from '../../images/logo.svg';
import s from './MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <section className={cn(s.overlay, 'mobile-menu')}>
      <div className={s.menuwrap}>
        <a href="/" className={s.logo} aria-label="Main page">
          <Logo />
        </a>
        <nav>
          <ul className={s.menu}>
            <li>
              <a href="/" className={s.menuLink}>
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
      </div>
    </section>
  );
};

export default MobileMenu;
