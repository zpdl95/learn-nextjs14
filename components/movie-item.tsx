'use client';

import Image from 'next/image';
import styles from '../styles/movieItem.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MovieItem({ movie }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${movie.id}`);
  };
  return (
    <li className={styles.item}>
      <figure onClick={onClick}>
        <Image fill src={movie.poster_path} alt={movie.title} />
      </figure>
      <h3>
        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
      </h3>
    </li>
  );
}
