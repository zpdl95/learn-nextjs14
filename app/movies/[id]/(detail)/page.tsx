import { getVideos } from '../../../api/api';
import { IParams } from './layout';
import styles from '../../../../styles/movie-videos.module.css';

export default async function MovieVideos({
  params: { id },
}: {
  params: IParams;
}) {
  const videos = await getVideos(id);

  return (
    <ul className={styles.ul}>
      {videos.map((v) => (
        <li key={v.id}>
          <iframe
            src={`https://youtube.com/embed/${v.key}`}
            allowFullScreen
            title={v.name}
            loading='lazy'
          />
        </li>
      ))}
    </ul>
  );
}
