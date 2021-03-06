import React from 'react';
import { A } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';
import Nav from '../Nav';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Burger } from '../../images/BurgerBtn.svg';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const openMenu = () => {
    // в идеале добавить display: block на блок с классом overlay
    // чёт не очень получилось, тайпскрипт ругается
  };

  return (
    <header className={s.header}>
      <div className={cn('container', s.headerCont)}>
        <A href="/" className={s.logo} aria-label="Main page">
          <Logo />
        </A>

        <Nav />

        <button type="button" className={s.burger} aria-label="Open menu" onClick={openMenu}>
          <Burger />
        </button>
      </div>
      <MobileMenu />
    </header>
  );
};

export default React.memo(Header);
