import React from 'react';
import styles from './Section.module.scss';

function Section({ title, children, flex }) {
  const flexClass = flex ? styles.flex : '';

  return (
    <section className={styles.section + ' ' + flexClass}>
      <p className={styles.title}>{title}</p>
      {children}
    </section>
  );
}

export default Section;
