import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';

function IconButton({ children, onClick, ...allyProps }) {
  return (
    <button
      type="button"
      className={styles.iconBtn}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
