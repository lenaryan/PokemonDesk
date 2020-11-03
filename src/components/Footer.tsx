import React from 'react';
import cn from 'classnames';
import s from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={cn(s.footerCont, 'container')}>
        <div className={s.footerMake}>
          Make with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </div>
        <a className={s.footerLink} href="/">
          Our Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
