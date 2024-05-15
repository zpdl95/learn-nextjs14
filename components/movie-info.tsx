import Image from 'next/image';
import Link from 'next/link';
import { getMovie } from '../app/api/api';
import { IParams } from '../app/movies/[id]/(detail)/layout';
import styles from '../styles/movie-info.module.css';
import BackBtn from './backBtn';

export default async function MovieInfo({ id }: IParams) {
  const movie = await getMovie(id);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <BackBtn />
      </header>
      <figure className={styles.img}>
        <Image fill src={movie.backdrop_path} alt={movie.title} />
      </figure>
      <h1 className={styles.title}>
        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
      </h1>
      <p className={styles.small_info}>
        <span>{movie.release_date}</span>
        <span>{movie.runtime}min</span>
        <span>⭐{movie.vote_average.toFixed(2)}</span>
      </p>
      <div className={styles.fold}>
        <section className={styles.long_info}>
          <div>
            <p className={styles.overview}>
              {movie.overview ? movie.overview : 'no overview'}
            </p>
          </div>
          <ul className={styles.genres}>
            {movie.genres.map((g) => (
              <li key={g.id}>#{g.name}</li>
            ))}
          </ul>
          <div>
            <Link href={movie.homepage} target={'_blank'}>
              Homepage &rarr;
            </Link>
          </div>
          <h4>Production Companies</h4>
          <ul className={styles.companies}>
            {movie.production_companies.map((c, idx) => (
              <li key={`${c.id + idx}`}>
                <Image fill src={c.logo_path} alt={c.name} title={c.name} />
              </li>
            ))}
          </ul>
          <aside className={styles.links}>
            <Link href={`/movies/${id}/credits`}>credits</Link>
            <Link href={`/movies/${id}/providers`}>providers</Link>
            <Link href={`/movies/${id}/similar`}>similar</Link>
          </aside>
        </section>
        <label>
          <input className={styles.check} type='checkbox' hidden />
          <svg
            className={`${styles.icon_less} ${styles.icon}`}
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z' />
          </svg>
          <svg
            className={`${styles.icon_more} ${styles.icon}`}
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z' />
          </svg>
        </label>
      </div>
    </section>
  );
}
