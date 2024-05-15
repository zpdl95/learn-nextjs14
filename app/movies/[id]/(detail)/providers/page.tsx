import { getProviders } from '../../../../api/api';
import { IParams } from '../layout';
import styles from '../../../../../styles/movie-providers.module.css';
import Image from 'next/image';

export default async function Providers({
  params: { id },
}: {
  params: IParams;
}) {
  const providers = await getProviders(id);
  const us = providers.US;
  return (
    <section className={styles.wrapper}>
      <h3>provider</h3>
      <section className={styles.section}>
        <p>flatrate</p>
        <ul className={styles.ul}>
          {us?.flatrate?.map((i, idx) => (
            <li className={styles.item} key={`${i.provider_id + idx}`}>
              <Image
                fill
                src={i.logo_path}
                alt={i.provider_name}
                title={i.provider_name}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <p>rent</p>
        <ul className={styles.ul}>
          {us?.rent?.map((i, idx) => (
            <li className={styles.item} key={`${i.provider_id + idx}`}>
              <Image
                fill
                src={i.logo_path}
                alt={i.provider_name}
                title={i.provider_name}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <p>buy</p>
        <ul className={styles.ul}>
          {us?.buy?.map((i, idx) => (
            <li className={styles.item} key={`${i.provider_id + idx}`}>
              <Image
                fill
                src={i.logo_path}
                alt={i.provider_name}
                title={i.provider_name}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
