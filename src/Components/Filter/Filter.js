import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.scss';
import { contactsActions, contactsSelectors } from 'redux/contacts';

function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <span className={styles.title}>Find contacts by name</span>
        <input
          className={styles.searchField}
          type="text"
          value={filter}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Filter;
