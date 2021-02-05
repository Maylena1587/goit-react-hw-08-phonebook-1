import React from 'react';
import PropTypes from 'prop-types';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Contact.module.scss';
import IconButton from 'Components/IconButton/';

function Contact({ id, name, phone, deleteHandler }) {
  return (
    <li key={id} className={styles.contact}>
      <span className={styles.name}>
        <ContactsIcon className={styles.icon} />
        {name}
      </span>

      <span className={styles.phone}>
        <LocalPhoneIcon className={styles.icon} />
        {phone}
      </span>

      <IconButton onClick={deleteHandler} aria-label="delete contact">
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Contact;
