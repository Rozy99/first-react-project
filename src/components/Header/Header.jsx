import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.logo}>
        <img src={require('../../assets/img/logo.png')} alt='logo' />
      </div>
    </header>
  );
};

export default Header;
