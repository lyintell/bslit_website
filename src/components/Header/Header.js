import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo.png"
            alt="BSLIT Logo"
            width={70}
            height={70}
            priority
          />
        </div>
        <h1 className={styles.title}>Bandama St-Laurent International Trading</h1>
      </div>
      <hr className={styles.divider} />
    </header>
  );
}
