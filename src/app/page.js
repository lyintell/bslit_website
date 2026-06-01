import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import styles from './page.module.css';

export const metadata = {
  title: 'Home | Bandama St-Laurent International Trading',
  description:
    'The Golden Gate to West Africa. Global Trade and Consulting services between North America and West Africa.',
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HeroBanner
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/ship.jpg`}
        alt="Cargo ship at port"
        tagline="The Golden Gate to West Africa"
      />

      <section className={styles.twoColumn}>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Global Trade</h2>
          <div className={styles.columnImageWrapper}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/globe.jpg`}
              alt="World globe showing trade routes"
              width={210}
              height={145}
            />
          </div>
          <p className={styles.columnText}>
            We source soft commodities from West Africa.
            <br />
            We import to West Africa: Road &amp; Building materials, machinery, Telecom, healthcare
            supply.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.column}>
          <Link href="/consulting" className={styles.columnTitleLink}>
            <h2 className={styles.columnTitle}>Consulting</h2>
          </Link>
          <div className={styles.columnImageWrapper}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/people.jpg`}
              alt="Business people consulting"
              width={210}
              height={145}
            />
          </div>
          <p className={styles.columnText}>
            Are you looking to expand your business in West Africa? Our North American and West
            African trained team will help you bridge the information and cultural gap.
          </p>
        </div>
      </section>
    </div>
  );
}
