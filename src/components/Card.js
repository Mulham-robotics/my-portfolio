import React from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/Card.module.css';

export default function Card({ title, subtitle, hashtags = [], link, imageSrc, imageAlt }) {
  return (
    <Link to={link} className={styles.card}>
        {imageSrc && <img src={imageSrc} alt={imageAlt} className={styles.image} />}
        <div className={styles.content}></div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.hashtags}>
                {hashtags.map((tag) => (
                    <span key={tag} className={styles.hashtag}>
                        #{tag}
                    </span>
        ))}
      </div>
    </Link>
  );
}
