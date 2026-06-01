import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Bandama St-Laurent International Trading',
  description:
    'Learn about Bandama St-Laurent International Trading — our history, our name, and our mission.',
};

export default function AboutUsPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Bandama St-Laurent, who are we?</h2>

      <p className={styles.paragraph}>
        The company was started as an extension of the operations of west African family businesses.
        Cousins of the families in west Africa needed supply of heavy machinery, building materials
        and healthcare products to feed the burgeoning Ivorian economy. They decided to leverage
        their network of cousins living in North America to handle their orders and source it to west
        Africa. The Name of the company was selected as the symbol of this primary liaison between
        Cote d&apos;Ivoire and Canada.
      </p>

      <p className={styles.paragraph}>
        - The <strong>Bandama</strong> is a powerful river crossing Cote d&apos;Ivoire from North to
        South, a river vital for trade and energy generation.
        <br />- The <strong>St-Laurent</strong> is the mythical river which has been the spinal cord
        of the Canadian economy since the first European expeditions.
      </p>

      <p className={styles.paragraph}>
        Since then, the cousins realized the synergies created by the gathering of their different
        experiences and network which span from finance, project management, international trade and
        agribusiness to name a few, the company evolved to provide consulting and advice to:
      </p>

      <ul className={styles.list}>
        <li>- North American local businesses to expand in West Africa and vice versa.</li>
        <li>- West African local producers to find business partners worldwide</li>
      </ul>
    </div>
  );
}
