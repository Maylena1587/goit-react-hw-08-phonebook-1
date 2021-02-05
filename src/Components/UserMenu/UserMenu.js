import React, { useRef } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.scss';

function UserMenu() {
  const btn = useRef();
  const currentUser = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(authOperations.logoutUser());
    btn.current.blur();
  };

  return (
    <div className={s.userMenu}>
      <AccountBoxIcon style={{ fontSize: 42 }} className={s.icon} />
      <span className={s.userName}>{currentUser}</span>
      <button ref={btn} className={s.btn} type="button" onClick={onClick}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
