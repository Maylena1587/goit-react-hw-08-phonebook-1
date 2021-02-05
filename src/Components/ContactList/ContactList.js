import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.scss';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const { getContacts, getFilter, getFilteredContacts } = contactsSelectors;

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const displayedContacts = filter.trim() ? filteredContacts : contacts;

  return (
    <ul className={styles.contactList}>
      {displayedContacts.map(contact =>
        Contact({
          id: contact.id,
          name: contact.name,
          phone: contact.number,
          deleteHandler: () =>
            dispatch(contactsOperations.deleteContact(contact.id)),
        }),
      )}
    </ul>
  );
}

export default ContactList;
