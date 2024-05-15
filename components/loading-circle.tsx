import styles from '../styles/loading-circle.module.css';

export default function LoadingCircle({ r }: { r: number }) {
  return (
    <div
      className={`${styles.wrapper} ${r === 100 && styles.r100} ${
        r === 75 && styles.r75
      } ${r === 50 && styles.r50}`}
    >
      <svg>
        <circle r={r}></circle>
      </svg>
    </div>
  );
}
