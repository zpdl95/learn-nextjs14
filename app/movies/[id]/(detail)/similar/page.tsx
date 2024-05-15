import { getSimilar } from '../../../../api/api';
import { IParams } from '../layout';
import styles from '../../../../../styles/movie-similar.module.css';
import Carousel from '../../../../../components/carousel';

export default async function Similar({ params: { id } }: { params: IParams }) {
  const similar = await getSimilar(id);
  return (
    <section className={styles.wrapper}>
      <h3>similar movies</h3>
      <Carousel datas={similar} />
    </section>
  );
}
