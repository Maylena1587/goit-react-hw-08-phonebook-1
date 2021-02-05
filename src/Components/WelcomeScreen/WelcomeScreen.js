import React from 'react';
import { Link } from 'react-router-dom';
import phonebookImg from 'images/book2.png';
import s from './WelcomeScreen.module.scss';

function WelcomeScreen() {
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <img className={s.image} src={phonebookImg} alt="open book" />
        <p className={s.text}>
          Welcome to our service! Please Log In or Sign Up to continue.
        </p>
        <Link to="/signup" className={s.link}>
          Sign Up
        </Link>
        <Link to="/login" className={s.link}>
          Log In
        </Link>
      </div>
    </>
  );
}

export default WelcomeScreen;
