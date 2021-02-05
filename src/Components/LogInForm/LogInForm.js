import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './LogInForm.module.scss';
import { authOperations } from 'redux/auth';

function LogInForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const btn = useRef();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(
      authOperations.loginUser({
        email: data.email.trim(),
        password: data.password.trim(),
      }),
    );
    console.log(data);
    btn.current.blur();
    reset({});
  };

  return (
    <>
      <h2 className={styles.title}>Log In to Your Account</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <input
            ref={register({
              required: true,
            })}
            className={styles.addField}
            type="email"
            name="email"
            placeholder="email"
          />
          {errors.email && errors.email.type === 'required' && (
            <p className={styles.error}>Login is required</p>
          )}
        </label>
        <label className={styles.label}>
          <input
            ref={register({ required: true, minLength: 3, maxLength: 12 })}
            className={styles.addField}
            type="password"
            name="password"
            placeholder="password"
          />
          {errors.password && errors.password.type === 'required' && (
            <p className={styles.error}>Password is required</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className={styles.error}>
              Password is too short. Minimum 3 characters.
            </p>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <p className={styles.error}>
              Password is too long. Maximum 12 characters.
            </p>
          )}
        </label>
        <button ref={btn} className={styles.btn} type="submit">
          Log In
        </button>
      </form>

      <p className={styles.disclaimer}>
        Don't have an account yet?{' '}
        <Link to="/signup" className={styles.link}>
          Sign Up
        </Link>{' '}
        Now
      </p>
    </>
  );
}

export default LogInForm;
