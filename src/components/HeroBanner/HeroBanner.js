import Image from 'next/image';
import styles from './HeroBanner.module.css';

export default function HeroBanner({ src, alt, tagline }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      {tagline && (
        <div className={styles.taglineBar}>
          <p className={styles.tagline}>{tagline}</p>
        </div>
      )}
    </div>
  );
}
