import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'Components/ContactList';
import ContactForm from 'Components/ContactForm';
import Section from 'Components/Section';
import Filter from 'Components/Filter';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Loader from 'Components/Loader';

function ContactsView() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getErrorData);
  const isLoading = useSelector(contactsSelectors.getLoadingData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Section flex={false}>
        <ContactForm />
      </Section>
      <Section title="Contacts" flex={true}>
        {isLoading ? (
          <Loader />
        ) : contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : error ? (
          <div>Oops. {error}.</div>
        ) : (
          <div>Oops. no contacts here! Let's add some data!</div>
        )}
      </Section>
    </>
  );
}

export default ContactsView;
