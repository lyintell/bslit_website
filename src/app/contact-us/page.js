import HeroBanner from '@/components/HeroBanner/HeroBanner';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Bandama St-Laurent International Trading',
  description:
    'Contact Bandama St-Laurent International Trading in Montreal, QC, Canada.',
};

export default function ContactUsPage() {
  return (
    <div className={styles.page}>
      <HeroBanner
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/city.jpg`}
        alt="West African city skyline"
        tagline="The Gate to West Africa"
      />

      <section className={styles.twoColumn}>
        <div className={styles.addressColumn}>
          <p className={styles.companyName}>
            <strong>Bandama St-Laurent International Trading</strong>
          </p>
          <p className={styles.addressLine}>1250 René-Lévesque Boulevard West, suite 2200</p>
          <p className={styles.addressLine}>Montreal, QC, Canada</p>
        </div>

        <div className={styles.formColumn}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
