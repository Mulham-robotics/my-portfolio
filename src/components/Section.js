import React from 'react';
import styles from '../css/Section.module.css';

export default function Section({ title, subtitle, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.cardsContainer}>{children}</div>
    </section>
  );
}