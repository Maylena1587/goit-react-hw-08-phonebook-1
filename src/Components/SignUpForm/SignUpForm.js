import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './SignUpForm.module.scss';
import { authOperations } from 'redux/auth';

function SignUpForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const btn = useRef();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(
      authOperations.createUser({
        name: data.login.trim(),
        email: data.email.trim(),
        password: data.password.trim(),
      }),
    );

    btn.current.blur();
    reset({});
  };

  return (
    <>
      <h2 className={styles.title}>
        Sign Up now and receive a full access to our service!
      </h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <input
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 8,
              pattern: /^[A-Za-z]+([ A-Za-z]+)*$/,
            })}
            className={styles.addField}
            type="text"
            name="login"
            placeholder="login"
          />
          {errors.login && errors.login.type === 'required' && (
            <p className={styles.error}>Login is required</p>
          )}
          {errors.login && errors.login.type === 'minLength' && (
            <p className={styles.error}>
              Login is too short. Minimum 3 characters.
            </p>
          )}
          {errors.login && errors.login.type === 'maxLength' && (
            <p className={styles.error}>
              Login is too long. Maximum 8 characters.
            </p>
          )}
          {errors.login && errors.login.type === 'pattern' && (
            <p className={styles.error}>
              Login can contain only english letters.
            </p>
          )}
        </label>
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
            ref={register({ required: true, minLength: 7, maxLength: 12 })}
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
              Password is too short. Minimum 7 characters.
            </p>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <p className={styles.error}>
              Password is too long. Maximum 12 characters.
            </p>
          )}
        </label>
        <button ref={btn} className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>

      <p className={styles.disclaimer}>
        Already Have an account? Please{' '}
        <Link to="/login" className={styles.link}>
          Log In
        </Link>
      </p>
    </>
  );
}

export default SignUpForm;
