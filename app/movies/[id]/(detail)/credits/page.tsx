import { getCredits } from '../../../../api/api';
import { IParams } from '../layout';
import styles from '../../../../../styles/movie-credits.module.css';
import Carousel from '../../../../../components/carousel';

export default async function Credits({ params: { id } }: { params: IParams }) {
  const credits = await getCredits(id);
  return (
    <section className={styles.wrapper}>
      <h3>credits</h3>
      <Carousel datas={credits} />
    </section>
  );
}
