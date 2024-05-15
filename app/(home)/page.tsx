import { Metadata } from 'next';
import { getMovies } from '../api/api';
import styles from '../../styles/home.module.css';
import MovieItem from '../../components/movie-item';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  const movies = await getMovies();
  return (
    <ul className={styles.wrapper}>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
