import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactForm.module.scss';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const btn = useRef();
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const onSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in Phonebook`);
      return;
    }
    dispatch(
      contactsOperations.addContact({
        name: data.name.trim(),
        number: data.number.trim(),
      }),
    );
    btn.current.blur();
    reset({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        <input
          ref={register({
            required: true,
            minLength: 3,
            maxLength: 18,
            pattern: /^[A-Za-z]+([ A-Za-z]+)*$/,
          })}
          className={styles.addField}
          type="text"
          name="name"
          placeholder="name"
        />
        {errors.name && errors.name.type === 'required' && (
          <p className={styles.error}>Name is required</p>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <p className={styles.error}>
            Name is too short. Minimum 3 characters.
          </p>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <p className={styles.error}>
            Name is too long. Maximum 18 characters.
          </p>
        )}
        {errors.name && errors.name.type === 'pattern' && (
          <p className={styles.error}>Name can contain only english letters.</p>
        )}
      </label>
      <label className={styles.label}>
        <input
          ref={register({ required: true, maxLength: 12, pattern: /^\d+$/ })}
          className={styles.addField}
          type="text"
          name="number"
          placeholder="phone number"
        />
        {errors.number && errors.number.type === 'required' && (
          <p className={styles.error}>Number is required</p>
        )}
        {errors.number && errors.number.type === 'pattern' && (
          <p className={styles.error}>
            Phone number should consist only from numbers.
          </p>
        )}
        {errors.number && errors.number.type === 'maxLength' && (
          <p className={styles.error}>Number is too long. Maximum 12 digits.</p>
        )}
      </label>
      <button ref={btn} className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
