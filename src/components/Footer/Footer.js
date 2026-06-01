import Link from 'next/link';
import styles from './Footer.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About us' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.links}>
          {links.map(({ href, label }, index) => (
            <span key={href}>
              {index > 0 && <span className={styles.separator}> | </span>}
              <Link href={href} className={styles.link}>{label}</Link>
            </span>
          ))}
        </nav>
        <p className={styles.copyright}>
          Copyright &copy; Bandama St-Laurent International Trading. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
