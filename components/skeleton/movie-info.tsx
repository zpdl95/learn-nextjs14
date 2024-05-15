import BackBtn from '../backBtn';
import styles from '../../styles/skeleton/movie-info.module.css';

export default function SkeletonMovieInfo() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <BackBtn />
      </header>
      <figure className={`${styles.img} ${styles.skeleton}`}></figure>
      <h1 className={`${styles.title} ${styles.skeleton}`}>0</h1>
      <p className={`${styles.small_info} ${styles.skeleton}`}>0</p>
      <div className={styles.fold}>
        <section className={styles.long_info}>
          <div>
            <p className={`${styles.overview} ${styles.skeleton}`}>0</p>
          </div>
          <ul className={styles.genres}></ul>
          <div></div>
          <h4>Production Companies</h4>
          <ul className={styles.companies}></ul>
          <aside className={styles.links}></aside>
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
