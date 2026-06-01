import styles from './page.module.css';

export const metadata = {
  title: 'Consulting | Bandama St-Laurent International Trading',
  description:
    'Consulting services for West-African local companies and international SMEs looking to enter the West African market.',
};

export default function ConsultingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Consulting for West-African Local Companies:
        </h2>
        <p className={styles.paragraph}>
          &emsp;Industrialization and Integration of the West African economies are two important
          pillars of the development policies initiated by their governments, policies which
          translate into more integrated legislation and infrastructure frameworks.
        </p>
        <p className={styles.paragraph}>
          &emsp;This environment improves the opportunity for local businesses to grow within the
          West African border and reach the critical mass required to be meaningful participants in
          the international business community. We assist West African companies in their growth
          process, providing strategic and financial engineering advice.
        </p>
        <p className={styles.paragraph}>
          &emsp;- &nbsp;Brokering partnerships between West African and International companies:
          Having helped West African companies extend their supply chain operations in places like
          China we have built a valuable body of knowledge and network of collaborators which your
          organization can leverage to operate efficiently in the sectors of Agrifood, electronic
          and medical devices and in a lesser extent in the construction industry.
        </p>
        <p className={styles.paragraph}>
          &emsp;- &nbsp;Advising on the financing options most suitable for your project: Financing
          an infrastructure projects and financing corporate expansions involve two very different
          channels of financing namely project finance and traditional corporate finance. By helping
          your organization understand early in the planning what are the natures and motivations of
          the different players involved in each financing channel at the local and international
          stage, we will help you articulate a financing structure maximizing the likelihood of
          success of the various financing rounds while optimizing your overall cost of capital. We
          will also give you access to a network of recurring
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Consulting for International SMEs Looking to enter the West African Market:
        </h2>
        <p className={styles.paragraph}>
          &emsp;For Small and Medium size Enterprises, building international partnerships is often
          time a challenging experience. The dynamic of the abroad targeted industry, the structure
          of the associated supply chains and other cultural barriers could stand on your path to
          success as hurdles harder to overcome than the language barrier. Our experience will help
          you save the time necessary to build a good understanding of those local markets and the
          cost of learning through your own experience.
        </p>
      </section>
    </div>
  );
}
