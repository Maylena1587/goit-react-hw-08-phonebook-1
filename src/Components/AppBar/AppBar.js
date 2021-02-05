import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './AppBar.module.scss';
import logo from 'images/logo.png';
import UserMenu from 'Components/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <a className={s.logo} href="/">
        <img className={s.img} src={logo} alt="phonebook logotype" />
      </a>
      {isLoggedIn ? <UserMenu /> : <></>}
    </div>
  );
}

export default AppBar;
